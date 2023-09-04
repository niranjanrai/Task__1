import "./App.scss";
import AboutSection from "./components/AboutSection";
import ArticleSection from "./components/ArticleSection";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Heading />
      <ArticleSection />
      <Footer />
    </>
  );
}

export default App;
