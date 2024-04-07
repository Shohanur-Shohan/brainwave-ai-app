import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits/Benefits";
import Collaboration from "./components/Collaboration/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Pricing from "./components/Pricing/Pricing";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden h-auto">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
