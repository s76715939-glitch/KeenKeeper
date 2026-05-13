import { Geist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { AppProvider } from "@/api/ContextAPI";

const FontGeist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "KeenKeep",
  description: "Friends to keep close in your life",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${FontGeist.className} h-full antialiased`}
      data-theme="light"
    >
      <body>
        <header>
          <NavBar />
        </header>
        <main>
          <AppProvider>{children}</AppProvider>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
