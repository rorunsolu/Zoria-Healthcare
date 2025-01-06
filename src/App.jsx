import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Benefits from "./components/Benefits";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Conversion from "./components/Conversion";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Benefits />
        <About />
        <Pricing />
        <Conversion />
        <Testimonials />
        <Faq />
        <Articles />
        <Footer />
      </div>
    </>
  );
}

export default App;
