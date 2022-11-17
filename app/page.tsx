import Banner from "./components/banner";
import DevIcons from "./components/devicons";

export default function Home() {
  return (
    <div className="home-banner">
      <Banner />
      <code>[Full Stack Developer]</code>
      <section className="code-logos">
        <h3>🧰 Languages and Tools</h3>
        <DevIcons />
      </section>
    </div>
  );
}
