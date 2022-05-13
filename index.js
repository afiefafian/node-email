const nodemailer = require('nodemailer');
require('dotenv').config();

function mailer() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
}

const emailTransport = mailer();

console.log('Process send email');

emailTransport.sendMail({
  from: process.env.DEFAULT_EMAIL,
  to: process.env.SEND_TO,
  subject: `Tickets for Jelajahin booking`,
  html: '<h4>Test 123 123</h4>',
})
  .then((info) => {
    console.log('Mail sent: %s', info.messageId);
  })
  .catch((err) => {
    console.error('Mail error: %s', err.message);
  });