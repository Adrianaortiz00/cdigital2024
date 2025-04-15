import emailjs from "@emailjs/browser";

const emailService = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const emailTemplate = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_INT;
const emailUserTemplate = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_USER;
const emailKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export const sendInternalEmail = async ({ name, email, phone, message }) => {
  const templateParams = {
    name,
    email,
    reply_to: email,
    phone,
    message,
    image_url: "http://localhost:3000/images/cdigitalEmail.jpg", //cambiar la url imagen cuando esté en producción. 
  };

  try {
    await emailjs.send(emailService, emailTemplate, templateParams, emailKey);
    console.log("Correo interno enviado con éxito");
  } catch (error) {
    console.error("Error al enviar correo interno:", error);
    throw error;
  }
};

export const sendUserEmail = async ({ email, name, message }) => {
  const templateParams = {
    name,
    email,
    reply_to: email,
    message,

  };

  try {
    await emailjs.send(emailService, emailUserTemplate, templateParams, emailKey);
    console.log("Correo al usuario enviado con éxito");
  } catch (error) {
    console.error("Error al enviar correo al usuario:", error);
    throw error;
  }
};

