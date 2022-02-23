import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";
import UrlSection from "./components/UrlSection";
import { URLProvider } from "./context/URLContext";
import BoostLinks from "./components/BoostLinks";
import Footer from "./components/Footer";

function App() {
  return (
    <URLProvider>
      <Navbar />
      <IntroSection />
      <UrlSection />
      <BoostLinks />
      <Footer />
    </URLProvider>
  );
}

export default App;
