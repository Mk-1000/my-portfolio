import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Landing from "./pages/landing/Landing";

function App() {
  const personalDetails = {
    name: "Mokni Hamdi",
    location: "Monastir, Tunisie",
    tagline: "I'm a Developer",
    email: "moknihamdi712@gmail.com",
    availability: "Open for work",
    brand:
      "I am a developer who is passionate about turning dreams into reality. I don't just imagine things; I bring them to life. I am skilled in all aspects of the development process, from design to implementation. I am committed to creating high-quality, functional solutions.",
  };

  return (
    <>
      <Header />
      <Landing name={personalDetails.name} tagline={personalDetails.tagline}/>
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
