import "../styles/globals.css";
import { Poppins } from "@next/font/google";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  subsets: ['latin'],
 });

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head />
      <body className="min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
