import Nav from "./nav";
import Footer from "./footer";
import "../styles/globals.css";

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
      </body>
    </html>
  );
}
