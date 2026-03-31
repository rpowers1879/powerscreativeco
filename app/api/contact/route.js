import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, business, service, budget, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Check for Resend API key
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please try again later.' },
        { status: 500 }
      );
    }

    // Dynamic import to avoid build-time initialization
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email via Resend
    await resend.emails.send({
      from: 'Powers Creative Co. <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL_TO || 'rpowers1879@outlook.com',
      subject: `New Inquiry from ${name}${business ? ` (${business})` : ''}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2aa2ff; margin-bottom: 24px;">New Portfolio Inquiry</h2>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 8px 0;"><strong>Business:</strong> ${business || 'Not provided'}</p>
            <p style="margin: 8px 0;"><strong>Service:</strong> ${service || 'Not selected'}</p>
            <p style="margin: 8px 0;"><strong>Budget:</strong> ${budget || 'Not selected'}</p>
          </div>

          <div style="background: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <p style="margin: 0 0 12px 0;"><strong>Message:</strong></p>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="color: #6c757d; font-size: 12px; margin-top: 24px;">
            Sent from Powers Creative Co. portfolio contact form
          </p>
        </div>
      `,
      replyTo: email,
    });

    return NextResponse.json(
      { success: true, message: "Message received! I'll get back to you soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
