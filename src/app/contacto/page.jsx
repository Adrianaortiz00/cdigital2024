'use client'
import "./metadata"

/* export default function ContactoPage() {
  return (
    <div>
      <h1>Contacto</h1>
      <p>¿Tienes alguna pregunta?.</p>
    </div>
  );
} */

/*   import { useState } from "react";
  import styles from "../../styles/contactForm.module.scss";
  
  const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    const [errors, setErrors] = useState({});
  
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
      return newErrors;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
      console.log("Datos enviados:", formData);
      alert("Mensaje enviado con éxito");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    };
  
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Contáctanos</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre o empresa *"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
  
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico *"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
  
          <input
            type="tel"
            name="phone"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={handleChange}
          />
  
          <textarea
            name="message"
            placeholder="Mensaje *"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <span className={styles.error}>{errors.message}</span>}
  
          <button type="submit" className={styles.button}>Enviar mensaje</button>
        </form>
      </div>
    );
  };
  
  export default ContactForm;
   */

  import { useState } from "react";
  import styles from "../../styles/contactForm.module.scss";
import { sendInternalEmail, sendUserEmail } from "../../utils/SendEmail";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

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
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await sendInternalEmail(formData);
      await sendUserEmail({ message: formData.message });
      alert("Mensaje enviado con éxito");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un problema al enviar el mensaje. Intenta de nuevo.");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contáctanos</h2>
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

        <textarea
          name="message"
          placeholder="Mensaje *"
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
        ></textarea>
        {errors.message && <span className={styles.error}>{errors.message}</span>}

        <button type="submit" className={styles.button}>Enviar mensaje</button>
      </form>
    </div>
  );
};

export default ContactForm;