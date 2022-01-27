require('dotenv').config()
import contactTemplate from '../../templates/contactTemplate'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
    port: 465,
    host: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PSW,
    },
    secure: true,
  })

  const { nume, prenume, email, telefon, program, mesaj } = req.body

  const textFormat = `
  Programare solicitata din Landing Page \n
  Nume: ${nume} \n
  Prenume: ${prenume} \n
  Email: ${email} \n
  Telefon: ${telefon} \n
  Program: ${program} \n
  Mesaj: ${mesaj} \n`

  const htmlFormat = contactTemplate(
    nume,
    prenume,
    email,
    telefon,
    program,
    mesaj
  )

  const mail = {
    from: '"ElaClinic" <no-reply@elaclinic.ro>',
    to: process.env.EMAIL_TO,
    replyTo: `"${prenume} ${nume}" <${email}>`,
    subject: `Programare Silueta Perfecta pentru ${prenume} ${nume}`,
    text: textFormat,
    html: htmlFormat,
  }

  transporter.sendMail(mail, function (err: any, info: any) {
    if (err) console.log(err)
    else {
      console.log(info)
      res.status(200).send(info)
    }
  })

  res.status(200)
}
