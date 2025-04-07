const emailService = require('../config/email');

// Liste simple de mots-clés courants dans les spams
const spamKeywords = ['viagra', 'casino', 'lottery', 'bitcoin', 'crypto'];

exports.sendContactEmail = async (req, res) => {
  try {
    const { name, email, message, token } = req.body;

    // 1. Validation des champs obligatoires
    if (!name || !email || !message || !token) {
      return res.status(400).json({
        status: 'error',
        message: 'Please provide all required fields',
      });
    }

    // 2. Validation améliorée du format email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        status: 'error',
        message: 'Please provide a valid email address',
      });
    }

    // 3. Vérification de la longueur des champs
    if (name.length > 100 || email.length > 100 || message.length > 3000) {
      return res.status(400).json({
        status: 'error',
        message: 'One or more fields exceed maximum length',
      });
    }

    // 4. Vérification de contenu spam basique
    const lowerMessage = message.toLowerCase();
    if (spamKeywords.some((keyword) => lowerMessage.includes(keyword))) {
      // Ne pas révéler la raison exacte pour ne pas aider les spammeurs
      return res.status(400).json({
        status: 'error',
        message: 'Your message could not be processed',
      });
    }

    // 5. Ajouter un délai artificiel pour décourager les attaques automatisées
    await new Promise((resolve) => setTimeout(resolve, 500));

    const emailContent = {
      to: process.env.EMAIL_RECIPIENT,
      subject: `Portfolio Contact: ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
        
        Sent from: Portfolio Contact Form
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Sent from your Portfolio Contact Form</em></p>
      `,
    };

    // 7. Envoyer l'email
    await emailService.sendEmail(emailContent);

    // 8. Renvoyer une réponse de succès
    res.status(200).json({
      status: 'success',
      message: 'Your message has been sent. Thank you!',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to send your message. Please try again later.',
    });
  }
};
