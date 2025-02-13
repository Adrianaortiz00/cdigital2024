import Button from "@/components/Button";
import SliderMain from "@/components/SliderMain";
import ContactForm from "@/components/ContactForm";
import SliderLogos from "@/components/SliderLogos";

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
      <Button 
        children={"holi peque"}
        variant = {"green-button"}
        size = {"small"} 
      />
      <Button 
        children={"holi verde"}
        variant = {"green-button"}
        size = {"medium"} 
      />
      <Button 
        children={"holi azul"}
        variant = {"blue-button"}
        size = {"medium"} 
      />
      <Button 
        children={"holi azul grande"}
        variant = {"blue-button"}
        size = {"large"} 
      />
      <h1 className="title">Space Grotesk | Bold 60 | Title h1</h1>
      <h2 className="subtitle">
        Space Grotesk | Medium 48 | Subtitle h2
      </h2>
      <h3 className="description">
        Poppins | Regular 30 | Descriptions h3
      </h3>
      <p className="text-p">Poppins | Regular 18 | Text p</p>
      <h4 className="text-h">Poppins | SemiBold 18 | Text h</h4>
      <ContactForm/>
    </div>
  );
}
