import AboutInvestJar from "@/components/AboutInvestJar/AboutInvestJar";
import CallToAction from "@/components/CallToAction/CallToAction";
import CoinPriceMarqueeWidget from "@/components/CoinPriceMarqueeWidget/CoinPriceMarqueeWidget";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import InvestorsActivity from "@/components/InvestorActivity/InvestorActivity";
import Hero1 from "@/components/Jumbotron/Jumbotron2";
import LogoClouds from "@/components/LogoClouds/LogoClouds";
import OurAmazingFeatures from "@/components/OurAmazingFeatures/OurAmazingFeatures";
import OurAmazingFeatures2 from "@/components/OurAmazingFeatures/OurAmazingFeatures2";
import Stats from "@/components/OurStats/Stats";
import ROIPlan from "@/components/ROIPlan/ROIPlan";



export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <CoinPriceMarqueeWidget />
      <Hero1 />
      <LogoClouds />
      <Stats />
      <AboutInvestJar />
      <OurAmazingFeatures2 />
      {/* <OurAmazingFeatures /> */}
      <HowItWorks />
      <ROIPlan />
      <CallToAction />
      <InvestorsActivity />
      <FAQ />
      <Footer />
    </main>
  );
}
