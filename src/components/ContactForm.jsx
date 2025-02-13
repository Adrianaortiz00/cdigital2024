"use client";
import { useState } from "react";
import { sendInternalEmail, sendUserEmail } from "../utils/sendEmail";
import styles from "../styles/components/ContactForm.module.scss";
import SubtitleSection from "./SubtitleSection";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
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

      setFormData({ name: "", email: "", phone: "", message: "" });
      setSuccessMessage("¡Mensaje enviado con éxito!");

    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setErrors({ form: error.message || "Hubo un problema al enviar el mensaje. Inténtalo de nuevo." });;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <SubtitleSection
        title="Contáctanos"
        description="This is a description of the section in center alignment. It could have 2 lines per subtitle."
        alignment="center"
        titleColor="white" 
        descriptionColor="white" 
      />
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre o empresa *"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico *"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}

        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={formData.phone}
          onChange={handleChange}
          className={styles.input}
        />
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}

        <textarea
          name="message"
          placeholder="Mensaje *"
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
        ></textarea>
        {errors.message && <span className={styles.error}>{errors.message}</span>}

        {errors.form && <span className={styles.error}>{errors.form}</span>}

        {successMessage && <span className={styles.success}>{successMessage}</span>}

        <button type="submit" className={styles.button} disabled={isLoading}>
          {isLoading ? "Enviando..." : "Enviar mensaje"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
