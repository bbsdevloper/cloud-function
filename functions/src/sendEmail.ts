import { logger } from "firebase-functions/v1";

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendEmail =  async (req:{
  to: string,
  from: string,
  templateName: string, // taking this just for logging purposes
  templateId: string,
  templateData: any
}, res : any) => {


  // Extract parameters from the body
  // while sending the html body, make sure to add the inline css and with variables 
  const { to, from, templateId, templateData, templateName } = req; 
  logger.log(`to : ${to} from : ${from} templateId : ${templateId} templateData : ${templateData} templateName : ${templateName}`)

  // Check if parameters exist
  if (!to || !from || !templateId || !templateData || !templateName) {
    res?.status(400)?.send('Missing parameters');
    return;
  } 

  const msg = {
    to: to,
    from: from,
    templateId: templateId,
    dynamic_template_data: templateData
 };

  // Send the email
  try {
    logger.log(`sending ${templateName} email to ${to} from ${from}`)
    await sgMail.send(msg);
    res?.status(200)?.send('Email sent successfully');
  } catch (error :  any) {
    logger.error(error);
    if (error) {
      logger.error(error?.response?.body);
    }
    res?.status(500)?.send('Error sending email');
  }
}

export default sendEmail