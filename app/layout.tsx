import Nav from "./components/nav";
import Footer from "./footer";
import "../styles/globals.css";
import ThemeToggle from "./components/theme-toggle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Nav />
        <article className="main">{children}</article>
        <Footer />
        <div id="film-grain-overlay"></div>
        //<ThemeToggle />
      </body>
    </html>
  );
}
