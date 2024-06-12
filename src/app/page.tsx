import Navbar from "./components/navbar/page";
import HomePage from "./components/homePage/page";
import AboutUs from "./components/aboutUs/page";
import HomePageTwo from "./components/homePageTwo/page";
import FooterSection from "./components/footerSection/page";
import ScrollingText from "./components/Slider/page";

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
