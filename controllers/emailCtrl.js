const nodemail = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendEmail = asyncHandler(async (date, req, res) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.MP,
    },
  });

  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Holaaa 👻" <viszellechacon@gmail.com>', // sender address
      to: data.to, // list of receivers
      subject: data.subject, // Subject line
      text: data.text, // plain text body
      html: data.html, // html body
    });

    console.log("Message sent: %s", info.messageId);
  }

  main().catch(console.error);
});

module.exports = {
  sendEmail,
};
