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
import Sidebar from "./components/Sidebar";

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
        <Sidebar />
      </div>
    </>
  );
}

export default App;
