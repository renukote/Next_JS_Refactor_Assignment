import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";
import HomePageTwo from "./components/HomePageTwo/HomePageTwo";
import FooterSection from "./components/FooterSection/FooterSection";
import ScrollingText from "./components/Slider/Slider";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomePage />
      <AboutUs />
      <ScrollingText />
      <HomePageTwo />
      <FooterSection />
    </main>
  );
}
