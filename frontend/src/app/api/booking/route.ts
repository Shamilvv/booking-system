import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { vehicleType, clientPhone, pickupAddress, dropoffAddress, pickupDate, pickupTime, files } = data;

        // Debug environment variables (don't log the actual password)
        console.log('Attempting to send email...');
        console.log('EMAIL_USER exists:', !!process.env.EMAIL_USER);
        console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);

        if (!process.env.EMAIL_PASS) {
            throw new Error('EMAIL_PASS is not configured in environment variables');
        }

        // Create a transporter using SMTP
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER || 'alnastransports@gmail.com',
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER || 'alnastransports@gmail.com',
            to: 'alnastransports@gmail.com',
            subject: `New Booking Request: ${vehicleType}`,
            text: `
        New Booking Details:
        --------------------
        Vehicle Type: ${vehicleType}
        Client Contact: ${clientPhone}
        Pickup Address: ${pickupAddress}
        Drop-off Address: ${dropoffAddress}
        Date: ${pickupDate}
        Time: ${pickupTime}
        
        Total Files Uploaded: ${files?.length || 0}
      `,
            attachments: files?.map((file: any) => ({
                filename: file.name,
                content: file.data,
                encoding: 'base64',
                contentType: file.contentType
            }))
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully!');

        return NextResponse.json({ message: 'Booking request sent successfully' }, { status: 200 });
    } catch (error: any) {
        console.error('Error sending email:', error.message || error);
        return NextResponse.json({
            message: 'Failed to send booking request',
            error: error.message,
            code: error.code || 'UNKNOWN_ERROR'
        }, { status: 500 });
    }
}


