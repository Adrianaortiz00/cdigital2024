"use client";
import { useState } from "react";
import { sendInternalEmail, sendUserEmail } from "../utils/sendEmail";
import styles from "@/styles/components/contactForm.module.scss";
import SubtitleSection from "./SubtitleSection";
import Button from "./Button";

const ContactForm = () => {
  const initialFormState = { name: "", email: "", phone: "", message: "" };
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "El nombre es obligatorio";
    if (!formData.email) {
      newErrors.email = "El correo es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El correo no es válido";
    }
    if (!formData.message) newErrors.message = "El mensaje es obligatorio";
    if (formData.phone && !/^\d{9,15}$/.test(formData.phone)) {
      newErrors.phone = "El teléfono debe contener solo números (9-15 dígitos)";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    try {
      await Promise.all([
        sendInternalEmail(formData),
        sendUserEmail({ name: formData.name, message: formData.message, email: formData.email }),
      ]);
      setFormData(initialFormState);
      setSuccessMessage("¡Mensaje enviado con éxito!");
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setErrors({ form: error.message || "Hubo un problema al enviar el mensaje. Inténtalo de nuevo." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <SubtitleSection
        title="Contáctanos"
        description="Déjanos tu mensaje y nuestro equipo se pondrá en contacto contigo lo antes posible para brindarte más información sobre nuestros servicios"
        alignment="center"
        color="white"
      />
      <form className={styles.form} onSubmit={handleSubmit}>
        {["name", "email", "phone"].map((field) => (
          <div key={field}>
            <input
              type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
              name={field}
              placeholder={
                field === "name" ? "Nombre o empresa *" :
                field === "email" ? "Correo electrónico *" : "Teléfono"
              }
              value={formData[field]}
              onChange={handleChange}
              className={styles.input}
            />
            {errors[field] && <span className={styles.error}>{errors[field]}</span>}
          </div>
        ))}
        <textarea
          name="message"
          placeholder="Mensaje *"
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
        />
        {errors.message && <span className={styles.error}>{errors.message}</span>}
        {errors.form && <span className={styles.error}>{errors.form}</span>}
        {successMessage && <span className={styles.success}>{successMessage}</span>}
        <Button type="submit" variant="green-button" disabled={isLoading}>
          {isLoading ? "Enviando..." : "Enviar mensaje"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
