var nodemailer = require("nodemailer");

module.exports.sendOTP = async (req, res) => {
  try {
   
    const {email,OTP} = req.body;
    // console.log(OTP,email);

    var transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port:587,
      auth: {
        user: "turner.grant@ethereal.email",
        pass: "1a1KJ1bypCwnsHqp93",
      },
    });

    var mailOptions = {
      from: '"Quick Sign" <anuragsrivastav0027@gmail.com>',
      to: `${email}`,
      subject: "Reset your account password",
      text: `OTP to reset your account is : ${OTP}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        // console.log("Email sent: " + info.response);
        return res.status(200).json("success")
      }
    });
  } catch (err) {
    console.log(err.message)
    return res.status(500).json({ status: 500, message: err.message });
  }
};
