// import * as functions from "firebase-functions";
// import * as logger from "firebase-functions/logger";
// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

import { logger } from "firebase-functions/v1";

// // const functions = require('firebase-functions');
// const admin = require("firebase-admin");

// admin.initializeApp();

// const sendEmail = async (req: any, res: any) => {
//     const msg = {
//         to: "muekeshk3163@gmail.com",
//         from: "unsnarl.secure@gmail.com",
//         templateId: "d-c1725864e64849639149782c58502a40",
//         dynamic_template_data: {
//           name: "Mukesh",
//         },
//       };
//       try {
//         await sgMail.send(msg);
//         logger.log("Email sent successfully");
//       } catch (error) {
//         logger.error("Error sending email", error);
//       }
// }

// export const sendWelcomeEmail = functions.auth.user().onCreate(async (user) => {

//   const userRef = admin.firestore().collection("users").doc(user.uid);
//   try {
//     await userRef.set({
//       displayName: user.displayName,
//       email: user.email,
//       // Additional user data you want to store
//     });
//     sendEmail(null, null)
//     logger.log("user created");
//   } catch (error) {
//     logger.error("Error user creating", error);
//   }
// });

// exports.sendByeEmail = functions.auth.user().onDelete((user) => {
//   const email = user.email;
//   const displayName = user.displayName;
//   logger.info(`User ${displayName} has been deleted with email ${email}`);
//   return null;
// });

// const functions = require('firebase-functions');
// const admin = require('firebase-admin');

// admin.initializeApp();
// exports.createUserDocument = functions.auth.user().onCreate(async (user:any) => {
//     try {
//       const userRef = admin.firestore().collection('users').doc(user.uid);
//       await userRef.set({
//         displayName: user.displayName,
//         email: user.email,
//         // Additional user data you want to store
//       });
//       logger.log('User document created successfully');
//     } catch (error) {
//       logger.error('Error creating user document', error);
//     }
//   });

// //   This is a example code which I have written this is for a express app you need to convert it to cloud function . 2 - 3 lines of code will change in this.

// // app.post('/sendEmail', async (req: Request<{
// //   to: string,
// //   from: string,
// //   templateName: string, // taking this just for logging purposes
// //   templateId: string,
// //   templateData: any
// // }>, res) => {

// //   // Check headers
// //   const contentType = req.get('content-type');
// //   if (!contentType || !contentType.includes('application/json')) {
// //     res.status(400);
// //     res.send('Invalid content-type. Must be application/json');
// //     return;
// //   }

// //   // Extract parameters from the body
// //   // while sending the html body, make sure to add the inline css and with variables
// //   const { to, from, templateId, templateData, templateName } = req.body;

// //   // Check if parameters exist
// //   if (!to || !from || !templateId || !templateData || !templateName) {
// //     res.status(400).send('Missing parameters');
// //     return;
// //   }

// //   const msg = {
// //     to: to,
// //     from: from,
// //     templateId: templateId,
// //     dynamic_template_data: templateData
// //  };

// //   // Send the email
// //   try {
// //     logger.log(`sending ${templateName} email to ${to} from ${from}`)
// //     await sgMail.send(msg);
// //     res.status(200).send('Email sent successfully');
// //   } catch (error :  any) {
// //     logger.error(error);
// //     if (error) {
// //       logger.error(error.response.body);
// //     }
// //     res.status(500).send('Error sending email');
// //   }
// // })

// // And remember logger.log does not work in cloud function you need to use functions.logger

import { onDocumentWritten } from "firebase-functions/v2/firestore";
import sendEmail from "./sendEmail";

exports.myfunction = onDocumentWritten("users/{userId}", async (event) => {
  try {
    await sendEmail(
      {
        to: "mukeshkk3162@gmail.com",
        from: "unsnarl.secure@gmail.com",
        templateName: "Dummy",
        templateId: "d-c1725864e64849639149782c58502a40",
        templateData: {
          name: "Mukesh",
        },
      },
      null
    );
    logger.log("Email sent successfully");
  } catch (error) {
    logger.error("Error sending email", error);
  }
});





// finally completed
// import * as functions from "firebase-functions";