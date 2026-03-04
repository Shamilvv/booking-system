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

        console.log('--- Booking Request via Resend API ---');
        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            throw new Error('RESEND_API_KEY is not configured');
        }

        // Format attachments for Resend
        const attachments = (files || []).map((file: any) => ({
            filename: file.name,
            content: file.data, // Resend expects base64 string
        }));

        const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                from: 'ALNAS Website <onboarding@resend.dev>', // Resend default for unverified domains
                to: 'shamilvvhouse@gmail.com', // Updated to verified testing recipient
                subject: `New Booking Request: ${vehicleType}`,
                html: `
                    <h2>New Booking Details</h2>
                    <p><strong>Vehicle Type:</strong> ${vehicleType}</p>
                    <p><strong>Customer Phone:</strong> ${clientPhone}</p>
                    <p><strong>Pickup:</strong> ${pickupAddress}</p>
                    <p><strong>Drop-off:</strong> ${dropoffAddress}</p>
                    <p><strong>Date:</strong> ${pickupDate}</p>
                    <p><strong>Time:</strong> ${pickupTime}</p>
                `,
                attachments: attachments
            }),
        });

        const result = await resendResponse.json();

        if (!resendResponse.ok) {
            console.error('Resend API Error:', result);
            throw new Error(result.message || 'Failed to send email via Resend');
        }

        return NextResponse.json({ message: 'Booking request sent successfully!' });

    } catch (error: any) {
        console.error('Detailed Email Error:', error);

        return NextResponse.json({
            message: 'Failed to send booking request',
            error: error.message,
            diagnostic: "API-based sending failed. Check RESEND_API_KEY."
        }, { status: 500 });
    }
}
