import About from "./components/About";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
     <Hero/>
     <Services/>
     <Pricing/>
     <About/>
     <Reviews/>
     <Booking/>
     <Contact/>
    </div>
  );
}
