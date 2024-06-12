import Navbar from "./components/navbar";
import HomePage from "./components/homePage";
import AboutUs from "./components/aboutUs";
import HomePageTwo from "./components/homePageTwo";
import FooterSection from "./components/footerSection";
import ScrollingText from "./components/Slider";

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
