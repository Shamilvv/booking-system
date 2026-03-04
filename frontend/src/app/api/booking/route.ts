import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { vehicleType, clientPhone, pickupAddress, dropoffAddress, pickupDate, pickupTime, files } = data;

        // Create a transporter using SMTP
        const transporter = nodemailer.createTransport({
            service: 'gmail',
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

        return NextResponse.json({ message: 'Booking request sent successfully' }, { status: 200 });
    } catch (error: any) {
        console.error('Error sending email:', error.message || error);
        return NextResponse.json({ message: 'Failed to send booking request', error: error.message }, { status: 500 });
    }
}


