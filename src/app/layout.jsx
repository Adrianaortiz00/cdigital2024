import Fonts from "../components/Fonts.jsx";
import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "CDigital | Soluciones en Power Platform",
  description: "CDigital crea soluciones innovadoras con Microsoft Power Platform.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "CDigital",
    title: "CDigital | Soluciones en Power Platform",
    description: "Automatiza y digitaliza procesos con Power Platform.",
    images: [
      {
        url: "/Logo_linkedin_png.jpg",
        width: 800,
        height: 600,
        alt: "Logo de CDigital",
      },
    ],
  },
  additionalMetaTags: [
    {
      name: "linkedin",
      content: "https://www.linkedin.com/company/cdigital-per%C3%BA",
    },
    {
      name: "youtube",
      content: "https://www.youtube.com/@CDigitalDEV",
    },
    {
      name: "instagram",
      content: "https://www.instagram.com/cdigital.dev?igsh=bGlpc3l6MHdyMXp3",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Fonts />
        <nav>
          <Header />
        </nav>
        <main>
          {children}
        </main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
