import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { email, message } = await request.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.RECEIVING_EMAIL,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.RECEIVING_EMAIL,
      to: process.env.RECEIVING_EMAIL,
      subject: `New message from ${email}`,
      text: message,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: 'Message sent successfully!' });
  } catch (error) {
    console.error('Failed to send message', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 