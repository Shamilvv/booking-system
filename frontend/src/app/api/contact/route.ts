import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

        const { error } = await resend.emails.send({
            from: 'ALNAS Website <onboarding@resend.dev>',
            to: ['alnastransports@gmail.com'],
            replyTo: email,
            subject: `New Website Enquiry from ${fullName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
                    <div style="background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); padding: 24px; border-radius: 8px 8px 0 0; margin: -20px -20px 24px -20px;">
                        <h2 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 900; letter-spacing: -0.5px;">New Contact Form Submission</h2>
                        <p style="color: #94a3b8; margin: 6px 0 0; font-size: 14px;">ALNAS Transportation Website</p>
                    </div>

                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr>
                            <td style="padding: 10px 12px; background-color: #f8fafc; border-radius: 6px; font-size: 13px; color: #64748b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; width: 30%;">Name</td>
                            <td style="padding: 10px 12px; font-size: 15px; color: #0F172A; font-weight: 600;">${fullName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 12px; background-color: #f8fafc; border-radius: 6px; font-size: 13px; color: #64748b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                            <td style="padding: 10px 12px; font-size: 15px; color: #2563EB;"><a href="mailto:${email}" style="color: #2563EB; text-decoration: none;">${email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 12px; background-color: #f8fafc; border-radius: 6px; font-size: 13px; color: #64748b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Phone</td>
                            <td style="padding: 10px 12px; font-size: 15px; color: #0F172A; font-weight: 600;"><a href="tel:${phone}" style="color: #0F172A; text-decoration: none;">${phone}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 12px; background-color: #f8fafc; border-radius: 6px; font-size: 13px; color: #64748b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Service</td>
                            <td style="padding: 10px 12px; font-size: 15px; color: #0F172A; font-weight: 600;">${service}</td>
                        </tr>
                    </table>

                    <div style="background-color: #f8fafc; border-left: 4px solid #2563EB; border-radius: 4px; padding: 16px; margin-bottom: 24px;">
                        <h4 style="margin: 0 0 10px; color: #0F172A; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Message</h4>
                        <p style="white-space: pre-wrap; color: #475569; margin: 0; font-size: 15px; line-height: 1.6;">${message}</p>
                    </div>

                    <div style="text-align: center; padding-top: 16px; border-top: 1px solid #e5e7eb;">
                        <p style="font-size: 12px; color: #94a3b8; margin: 0;">Sent from the AL NAS Transportation contact form</p>
                    </div>
                </div>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
        }

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
