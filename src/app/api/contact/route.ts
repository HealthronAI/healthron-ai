import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { persona, name, email, company, details, dataTypes } = data;

    const isProvider = persona === 'provider';
    const personaTitle = isProvider ? 'Data Provider' : 'AI Developer';
    
    // Format the email beautifully using HTML
    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <div style="text-align: center; margin-bottom: 24px;">
          <h2 style="color: #0ea5e9; margin: 0;">New ${personaTitle} Lead</h2>
          <p style="color: #64748b; margin-top: 4px;">Healthron AI Contact Form</p>
        </div>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 24px; border: 1px solid #f1f5f9;">
          <h3 style="margin-top: 0; color: #0f172a; font-size: 16px; margin-bottom: 16px;">Contact Information</h3>
          <p style="margin: 0 0 12px 0; color: #334155;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 0 0 12px 0; color: #334155;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0ea5e9;">${email}</a></p>
          <p style="margin: 0 0 0 0; color: #334155;"><strong>${isProvider ? 'Hospital/Clinic' : 'Company'}:</strong> ${company}</p>
        </div>
        
        <div style="background-color: #f0fdfa; padding: 20px; border-radius: 8px; border: 1px solid #ccfbf1;">
          <h3 style="margin-top: 0; color: #0f172a; font-size: 16px; margin-bottom: 16px;">Specific Request Details</h3>
          ${isProvider ? `
            <p style="margin: 0 0 8px 0; color: #0f172a;"><strong>Data Modalities Available:</strong></p>
            <p style="margin: 0; color: #334155;">${dataTypes || 'Not specified'}</p>
          ` : `
            <p style="margin: 0 0 8px 0; color: #0f172a;"><strong>What they are building:</strong></p>
            <p style="margin: 0; color: #334155; line-height: 1.5;">${details || 'Not specified'}</p>
          `}
        </div>
        
        <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #e2e8f0; text-align: center;">
          <p style="font-size: 12px; color: #94a3b8; margin: 0;">This is an automated message from your Healthron AI demo site.</p>
        </div>
      </div>
    `;

    const { data: resendData, error } = await resend.emails.send({
      from: 'Healthron AI <onboarding@resend.dev>',
      to: ['connect@healthronai.com'], 
      subject: `New ${personaTitle} Lead: ${name} from ${company}`,
      html: htmlContent,
      replyTo: email,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: resendData });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
