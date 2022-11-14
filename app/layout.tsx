import Nav from "./blog/nav";
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
        <article>{children}</article>
      </body>
    </html>
  );
}
