import Banner from "./banner";
import DevIcons from "./devicons";

export default function Home() {
  return (
    <div className="home-banner">
      <Banner />
      <code>[Full Stack Developer]</code>
      <section className="code-logos">
        <DevIcons />
      </section>
    </div>
  );
}
