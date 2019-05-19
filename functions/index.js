const functions = require("firebase-functions");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  const sgMail = require("@sendgrid/mail");

  sgMail.setApiKey(
    "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"
  );

  const msg = {
    to: "hl2tf2@gmail.com",
    from: "test@example.com",
    subject: "Sending with Twilio SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>"
  };
  sgMail.send(msg);

  response.send("Hello from Firebase!sadlhaskdhakhdsk");
});
