import Banner from "./components/banner";
import DevIcons from "./components/devicons";
import Stats from "./components/stats" ;

export default function Home() {
  return (
    <>
      <div className="home-banner">
        <Banner />
        <code>[Full Stack Developer]</code>
        <section className="bio">
            <p>Hi there! My name is Matt, and I'm a full stack developer with 
            over 5 years of experience in building complex web applications. I 
            have a strong passion for creating user-friendly, responsive and 
            high-performance websites that deliver value to users.</p>
            <p>My expertise lies in developing custom web applications using 
            various programming languages including TypeScript, Python, Rust, 
            and PHP. I also have extensive experience in using popular 
            frameworks and technologies such as React, Next, Vue, Laravel, 
            and WordPress.</p>
            <p>In addition to my technical skills, I consider myself a problem 
            solver with a keen eye for detail, and I have excellent communication 
            and teamwork skills. I enjoy working with clients and stakeholders 
            to understand their needs, and delivering solutions that exceed their 
            expectations.</p>
            <p>When I'm not coding, I enjoy playing golf, gaming, and spending 
            time with my family and two beagles. I believe that my diverse set 
            of skills and my passion for creating innovative and practical 
            solutions make me an ideal candidate for any web development project.</p>
        </section>
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
