import Button from "@/components/Button";
import SliderMain from "@/components/SliderMain";
import ContactForm from "@/components/ContactForm";
import SliderLogos from "@/components/SliderLogos";
import SliderServices from "@/components/SliderServices";

export const metadata = {
  title: "Inicio | CDigital | Soluciones en Power Platform",
  description:
    "Bienvenido a CDigital, donde ayudamos a las empresas a optimizar sus procesos con Microsoft Power Platform.",
};

export default function Page() {
  return (
    <div>
      <SliderMain/>
      <SliderLogos/>
      <SliderServices/>
      <ContactForm/>
    </div>
  );
}
