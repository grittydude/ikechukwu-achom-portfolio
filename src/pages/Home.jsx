import Hero from "../components/home/Hero";
import Marquee from "../components/home/Marquee";
import Ecosystem from "../components/home/Ecosystem";
import CoreIdea from "../components/home/CoreIdea";
import CurrentlyBuilding from "../components/home/CurrentlyBuilding";
import SocialProof from "../components/home/SocialProof";
import AboutPreview from "../components/home/AboutPreview";
import Newsletter from "../components/shared/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Ecosystem />
      <CoreIdea />
      <CurrentlyBuilding />
      <SocialProof />
      <AboutPreview />
      <Newsletter />
    </>
  );
}
