import emailjs from "@emailjs/browser";

const emailService = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const emailTemplate = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_INT;
const emailUserTemplate = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_USER;
const emailKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export const sendInternalEmail = ({ name, email, phone, message }) => {
  const templateParams = {
    name,
    email,
    phone,
    message,
  };

  return emailjs.send(emailService, emailTemplate, templateParams, emailKey)
    .then(() => console.log("Correo interno enviado con éxito"))
    .catch((error) => console.error("Error al enviar correo interno:", error));
};

export const sendUserEmail = ({ message }) => {
  const templateParams = {
    message,
  };

  return emailjs.send(emailService, emailUserTemplate, templateParams, emailKey)
    .then(() => console.log("Correo al usuario enviado con éxito"))
    .catch((error) => console.error("Error al enviar correo al usuario:", error));
};

