import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { fullName, email, phone, service, message } = body;

        if (!fullName || !email || !phone || !service || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'alnastransports@gmail.com',
            subject: `New Website Inquiry from ${fullName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-w: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #003D4C; border-bottom: 2px solid #FF6B35; padding-bottom: 10px;">New Contact Form Submission</h2>
                    
                    <div style="margin-top: 20px;">
                        <p><strong>Name:</strong> ${fullName}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Service of Interest:</strong> ${service}</p>
                    </div>
                    
                    <div style="margin-top: 20px; background-color: #f9f9f9; padding: 15px; border-left: 4px solid #1D4ED8; border-radius: 4px;">
                        <h4 style="margin-top: 0; color: #333;">Message/How we can help:</h4>
                        <p style="white-space: pre-wrap; color: #555; margin-bottom: 0;">${message}</p>
                    </div>
                    
                    <div style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">
                        <p>This email was sent from the Alnas Transportation website contact form.</p>
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
