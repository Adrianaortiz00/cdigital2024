import { Poppins, Space_Grotesk } from "next/font/google";
import "../styles/page.module.scss";


const spaceGrotesk = Space_Grotesk({subsets: ['latin'], weight: ['700','500']})
const poppins = Poppins({subsets: ['latin'], weight: ['400']})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${spaceGrotesk.className}`}>
        {children}
      </body>
    </html>
  );
}
