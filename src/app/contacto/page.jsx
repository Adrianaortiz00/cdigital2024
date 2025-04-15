import ContactForm from "@/components/ContactForm";
import SubtitleSection from "@/components/SubtitleSection";

export const metadata = {
  title: "Contacto | CDigital | Soluciones en Power Platform", 
  description: "Ponte en contacto con nosotros para saber cómo podemos ayudarte a transformar tu negocio con Power Platform.",
}; 

export default function ContactoPage() {
  return (
    <div>
      <SubtitleSection
        title="Soluciones Tecnológicas"
        description="This is a description of the section in center alignment. It could have 2 lines per subtitle."
        alignment="center"
      />
      <ContactForm/>
    </div>
  );
}



