import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import net from 'net';

// Helper to test if a port is reachable
async function checkConnectivity(host: string, port: number, timeout = 3000): Promise<boolean> {
    return new Promise((resolve) => {
        const socket = new net.Socket();
        const timer = setTimeout(() => {
            socket.destroy();
            resolve(false);
        }, timeout);

        socket.connect(port, host, () => {
            clearTimeout(timer);
            socket.destroy();
            resolve(true);
        });

        socket.on('error', () => {
            clearTimeout(timer);
            resolve(false);
        });
    });
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { vehicleType, clientPhone, pickupAddress, dropoffAddress, pickupDate, pickupTime, files } = body;

        console.log('--- Booking Request Diagnostics ---');
        console.log('EMAIL_USER exists:', !!process.env.EMAIL_USER);
        console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);

        // Run connectivity checks
        const canReach465 = await checkConnectivity('smtp.gmail.com', 465);
        const canReach587 = await checkConnectivity('smtp.gmail.com', 587);
        const canReach80 = await checkConnectivity('google.com', 80); // Baseline internet test

        console.log('Connectivity Test:', { canReach465, canReach587, canReach80 });

        if (!canReach465 && !canReach587) {
            console.error('CRITICAL: Both SMTP ports are unreachable from this environment.');
            if (canReach80) {
                console.error('Note: Internet is reachable (Port 80 OK), which means Render is likely blocking SMTP ports.');
            }
        }

        // Create a transporter using SMTP
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587, // Trying 587 as primary
            secure: false, // Use STARTTLS
            auth: {
                user: process.env.EMAIL_USER || 'alnastransports@gmail.com',
                pass: process.env.EMAIL_PASS,
            },
            connectionTimeout: 15000,
            greetingTimeout: 15000,
            socketTimeout: 15000,
            debug: true, // Enable debug
            logger: true  // Log to console
        });

        const mailOptions = {
            from: process.env.EMAIL_USER || 'alnastransports@gmail.com',
            to: 'alnastransports@gmail.com',
            subject: `New Booking Request: ${vehicleType}`,
            text: `
                Vehicle Type: ${vehicleType}
                Customer Phone: ${clientPhone}
                Pickup: ${pickupAddress}
                Drop-off: ${dropoffAddress}
                Date: ${pickupDate}
                Time: ${pickupTime}
            `,
            attachments: (files || []).map((file: any) => ({
                filename: file.name,
                content: file.data,
                encoding: 'base64',
                contentType: file.contentType
            }))
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Booking request sent successfully!' });

    } catch (error: any) {
        console.error('Detailed Email Error:', error);

        // Detailed error for the client
        let diagnosticInfo = "";
        if (error.code === 'ECONNRESET') diagnosticInfo = "Connection was reset by the server/firewall.";
        if (error.code === 'ETIMEDOUT') diagnosticInfo = "Connection timed out. Render may be blocking SMTP ports.";

        return NextResponse.json({
            message: 'Failed to send booking request',
            error: error.message,
            code: error.code,
            diagnostic: diagnosticInfo
        }, { status: 500 });
    }
}
