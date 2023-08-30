require("dotenv").config();

const express = require("express");
const flash = require("connect-flash");
const nodemailer = require("nodemailer");
const postmark = require("postmark");

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(express.static("public"));
app.use(express.static("node_modules"));

//Templating engine
app.set("view engine", "ejs");


/*
 * GET /
 * HOME
 */

let pop = 0;

app.get("/", async (req, res) => {
  try {

    res.render("index", {
      pop,
    });
  } catch (error) {
    console.log(error);
  }
});



/*
 * POST /
 * HOME
 */

// app.post("/message", async (req, res) => {
//     // Mail to Min. B
//     const transporter = nodemailer.createTransport({
//       service: "Postmark",
//       auth: {
//         user: process.env.POSTMARK_KEY,
//         pass: process.env.POSTMARK_KEY
//       },
//     });
  
//     const clientEmailAddress = "davidnienge@gmail.com";
//     const userEmailAddress = req.body.email;
//     const userEmailSubject = req.body.subject;
  
//     const clientMailOptions = {
//       from: "info@judithowoicho.com",
//       to: clientEmailAddress,
//       subject: `New message from: ${userEmailAddress}\nSubject: ${userEmailSubject}`,
//       text: req.body.message,
//     };
  
//     transporter.sendMail(clientMailOptions, (error, info) => {
//       if (error) {
//         console.log("Error forwarding message to client:", error);
//         pop = 1;
//         res.redirect("/");
//       } else {
//         console.log("Message forwarded to client:", info.response);
//         // Send acknowledgment email to user
//         sendAcknowledgmentEmail();
//         pop = 2;
//         res.redirect("/");
//       }
//     });
  
//     //AcknowledgeEmail
//     function sendAcknowledgmentEmail() {
//       // UserMail
//       const userEmailAddress = req.body.email;
  
//       //Judy'sMail
//       const clientEmailAddress = "davidnienge@gmail.com";
  
//       // Send an email:
//       const client = new postmark.ServerClient(
//         "e842d589-1f3c-480d-aef6-031ea688b7a4"
//       );
  
//       client.sendEmailWithTemplate({
//         From: "support@judithowoicho.com",
//         To: userEmailAddress,
//         TemplateAlias: "Thank-You",
//         TemplateModel: {
//           product_name: "Judith Owoicho",
//           name: req.body.name,
//           support_email: clientEmailAddress,
//           action_url: "judithowoicho.com",
//         },
//       });
//     }
// });




app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });