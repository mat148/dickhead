const express = require('express');
const app = express();
const port = 3000;

const dotenv = require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

app.post('/message', (req, res) => {
    const name = req.body.name;
    const number = req.body.number;

    console.log(name, number);

    /*client.messages
        .create({
            body: 'The cake is a lie',
            from: '+13393304005',
            to: '+13153828467'
        }).then(message => {
            res.send(message.sid);
        })*/
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

//POST request: Number to text with a response back to the front-end on success

//GET request?: Send information to the text api

//Function for sending out texts

//GET request?: Get a response back from the dickhead to cancel the texts

//GET request?: Wait for text responses from the dickhead and post them to the front-end