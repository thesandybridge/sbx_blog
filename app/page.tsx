import Banner from "./components/banner";
import DevIcons from "./components/devicons";
import Stats from "./components/stats" ;

export default function Home() {
  return (
    <>
      <div className="home-banner">
        <Banner />
        <code>[Full Stack Developer]</code>
        <section className="code-logos">
            <h3>🧰 Languages and Tools</h3>
            <DevIcons />
        </section>
        <hr />
        <section className="code-stats">
            <h3>Language Stats</h3>
            <Stats />
        </section>
      </div>
    </>
  );
}
