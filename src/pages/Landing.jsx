import { Service, Menu, Features, Header, Navbar, Footer } from "../components";
import Fade from "react-reveal/Fade";

const Landing = () => {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Fade right>
        <Service />
      </Fade>
      <Fade left>
        <Menu />
      </Fade>
      <Fade right>
        <Features />
      </Fade>
      <Footer />
    </div>
  );
};

export default Landing;
