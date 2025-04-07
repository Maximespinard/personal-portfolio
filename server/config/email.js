const nodemailer = require('nodemailer');

// Create reusable transporter object using SMTP transport
let transporter;

if (process.env.NODE_ENV === 'production') {
  // Production settings
  transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
} else {
  // Development settings - using console output instead of actually sending emails
  transporter = {
    sendMail: (mailOptions) => {
      console.log('Email would be sent in production:');
      console.log('To:', mailOptions.to);
      console.log('Subject:', mailOptions.subject);
      console.log('Text:', mailOptions.text);
      return Promise.resolve({ response: 'Email logged to console' });
    },
  };
}

/**
 * Send email
 * @param {Object} emailContent - Email content with to, subject, text, and html
 * @returns {Promise} - Nodemailer send result
 */
exports.sendEmail = async (emailContent) => {
  const { senderName, to, subject, text, html } = emailContent;
  const mailOptions = {
    from: senderName,
    to,
    subject,
    text,
    html,
  };
  return await transporter.sendMail(mailOptions);
};
