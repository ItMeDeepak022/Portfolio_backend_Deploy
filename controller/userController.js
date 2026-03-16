const { transporter } = require("../config/config")

let getInfo = async (req, res) => {
    const { name, email, mobileNo, message } = req.body

    // 📩 Email to Admin
    await transporter.sendMail({
        from: email,
        to: "deepakkushwaha5945@gmail.com",
        subject: "New Query Received",
        html: `
  <div style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,sans-serif;">
    
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px;">
  <tr>
  <td align="center">

  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 4px 10px rgba(0,0,0,0.1);">

  <tr>
  <td style="background:#2563eb;color:white;padding:20px;text-align:center;font-size:22px;font-weight:bold;">
  New Portfolio Query
  </td>
  </tr>

  <tr>
  <td style="padding:25px;font-size:15px;color:#374151;">
  You have received a new message from your portfolio website.
  </td>
  </tr>

  <tr>
  <td style="padding:0 25px 25px 25px;">

  <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-size:14px;">

  <tr>
  <td style="font-weight:bold;width:120px;">Name:</td>
  <td>${name}</td>
  </tr>

  <tr style="background:#f9fafb;">
  <td style="font-weight:bold;">Email:</td>
  <td>${email}</td>
  </tr>

  <tr>
  <td style="font-weight:bold;">Phone:</td>
  <td>${mobileNo}</td>
  </tr>

  <tr style="background:#f9fafb;">
  <td style="font-weight:bold;">Message:</td>
  <td>${message}</td>
  </tr>

  </table>

  </td>
  </tr>

  <tr>
  <td style="background:#f3f4f6;text-align:center;padding:15px;font-size:13px;color:#6b7280;">
  © 2026 Deepak Kushwaha Portfolio
  </td>
  </tr>

  </table>

  </td>
  </tr>
  </table>

  </div>
`
    })
    // 📩 Email to User
    await transporter.sendMail({
        from: "deepakkushwaha5945@gmail.com",
        to: email,
        subject: "Thanks for contacting us",
        html: `
<div style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:20px;">
<tr>
<td align="center">

<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:white;border-radius:10px;overflow:hidden;box-shadow:0 4px 10px rgba(0,0,0,0.1);">

<tr>
<td style="background:#16a34a;color:white;padding:20px;text-align:center;font-size:22px;font-weight:bold;">
Message Received ✅
</td>
</tr>

<tr>
<td style="padding:25px;color:#374151;font-size:15px;line-height:1.6;">
Hello <b>${name}</b>,<br><br>

Thank you for contacting me through my portfolio website.  
Your message has been received successfully and I will respond as soon as possible.
</td>
</tr>

<tr>
<td style="padding:0 25px 25px 25px;">
<div style="background:#f9fafb;padding:15px;border-radius:6px;font-size:14px;color:#374151;">
Response time: <b>Within 24 hours</b>
</div>
</td>
</tr>

<tr>
<td style="padding:0 25px 25px 25px;font-size:14px;color:#6b7280;">
Best Regards,<br>
<b>Deepak Kushwaha</b><br>
MERN Stack Developer
</td>
</tr>

<tr>
<td style="background:#f3f4f6;text-align:center;padding:15px;font-size:13px;color:#6b7280;">
© 2026 Deepak Kushwaha Portfolio
</td>
</tr>

</table>

</td>
</tr>
</table>

</div>
`
    })



    res.send({
        status: true,
        message: 'message sent successfully'
    })
}



module.exports = { getInfo }