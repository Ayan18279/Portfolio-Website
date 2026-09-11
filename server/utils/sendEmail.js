const nodemailer = require('nodemailer');

/**
 * Send a contact notification email using Nodemailer
 * @param {Object} options - Email parameters: { name, email, subject, message }
 */
const sendEmail = async ({ name, email, subject, message }) => {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const recipientEmail = process.env.NOTIFICATION_EMAIL || 'ayanansari102938@gmail.com';

  if (!emailUser || !emailPass) {
    console.warn('\n------------------------------------------------------------');
    console.warn('[Email Notice]: EMAIL_USER or EMAIL_PASS is not set in server/.env.');
    console.warn(`[Message Saved locally]: From "${name}" (${email})`);
    console.warn('To receive actual emails in your inbox, set EMAIL_USER & EMAIL_PASS (App Password) in server/.env.');
    console.warn('------------------------------------------------------------\n');
    return { success: false, reason: 'SMTP credentials missing in server/.env' };
  }

  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  const mailOptions = {
    from: `"${name} via Portfolio" <${emailUser}>`,
    replyTo: email,
    to: recipientEmail,
    subject: `[Portfolio Inquiry] ${subject || 'New Contact Message'}`,
    text: `You have received a new contact message from your portfolio website:

Name: ${name}
Email: ${email}
Subject: ${subject || 'N/A'}
Date: ${new Date().toLocaleString()}

Message:
${message}
`,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; color: #1e293b;">
        <div style="background-color: #2563eb; padding: 24px; text-align: center; color: #ffffff;">
          <h2 style="margin: 0; font-size: 20px; font-weight: 700;">New Portfolio Contact Message</h2>
        </div>
        <div style="padding: 24px; background-color: #ffffff;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #64748b; width: 100px;">From:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${name} (&lt;<a href="mailto:${email}" style="color: #2563eb;">${email}</a>&gt;)</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Subject:</td>
              <td style="padding: 8px 0; color: #0f172a;">${subject || 'Portfolio Contact Message'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Date:</td>
              <td style="padding: 8px 0; color: #0f172a;">${new Date().toLocaleString()}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <div style="margin-top: 16px;">
            <p style="font-weight: bold; color: #64748b; margin-bottom: 8px;">Message Content:</p>
            <div style="background-color: #f1f5f9; padding: 16px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${message}</div>
          </div>
          <div style="margin-top: 24px; text-align: center;">
            <a href="mailto:${email}?subject=${encodeURIComponent('Re: ' + (subject || 'Portfolio Inquiry'))}" style="display: inline-block; background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-weight: 600; font-size: 14px;">Reply directly to ${name}</a>
          </div>
        </div>
        <div style="background-color: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
          Sent from your Developer Portfolio Website Contact Form
        </div>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`[Email Sent Successfully] MessageId: ${info.messageId} to ${recipientEmail}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('[Email Dispatch Error]:', error.message);
    return { success: false, error: error.message };
  }
};

module.exports = sendEmail;
