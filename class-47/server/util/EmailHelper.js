const nodemailer = require("nodemailer");
const fs = require("fs");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

const { SENDGRID_API_KEY } = process.env;

function replaceContent(content, creds) {
  let allKeysArr = Object.keys(creds);
  allKeysArr.forEach(function (key) {
    content = content.replace(`#{${key}}`, creds[key]);
  });
  return content;
}

async function EmailHelper(templateName, receiverEmail, creds) {
  try {
    const templatePath = path.join(__dirname, "email_templates", templateName);
    let content = await fs.promises.readFile(templatePath, "utf-8");
    const emailDetails = {
      to: receiverEmail,
      from: "shashwat.bagaria_1@scaler.com",
      subject: "Mail from Scaler Shows",
      text: `Hi ${creds.name}, this is your reset otp ${creds.otp}`,
      html: replaceContent(content, creds),
    };

    const transportDetails = {
      host: "smtp.sendgrid.net",
      port: 587,
      auth: {
        user: "apikey",
        pass: SENDGRID_API_KEY,
      },
    };

    const transporter = nodemailer.createTransport(transportDetails);
    await transporter.sendMail(emailDetails);
  } catch (err) {
    console.log(err);
  }
}

module.exports = EmailHelper;
