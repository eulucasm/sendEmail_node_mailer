const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

const port = 3000;

const user = "portalapphomologacao@gmail.com";
const pass = "valiant010203";

app.get('/', (req, res) => res.send('hello'));

app.get('/send', (req, res) => {

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user,
            pass
        }
    })

    transporter.sendMail({
        from: user,
        to: user,
        replyTo: "lucaspoletis@gmail.com",
        subject: "Email teste",
        text: "esse email ainda é um teste em estudo",
    }).then(info => {
        res.send(info)
    }).catch(error => {
        res.send(error)
    })
})

app.listen(port, () => console.log(`Running on port ${port}!`));