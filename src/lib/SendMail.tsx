import emailjs from '@emailjs/browser';

type MailRequest = {
    firstName: string,
    lastName: string,
    email: string
    details: string,
}

export const SendMail = (data: MailRequest) => {
  const templateId =
    process.env.REACT_APP_MAILJS_TEMPLATE_ID || "";
  const serviceId =
    process.env.REACT_APP_MAILJS_SERVICE_ID || "";
  const publicKey =
    process.env.REACT_APP_MAILJS_PUBLIC_KEY;

  return emailjs.send(serviceId, templateId, data, publicKey);
};