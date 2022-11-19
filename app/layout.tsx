import Nav from "./components/nav";
import Footer from "./footer";
import "../styles/globals.css";
import Terminal from "./terminal/terminal";

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
        <Terminal />
        <Footer />
      </body>
    </html>
  );
}
