import Section1 from "@/components/WorkasPro/Section1/Section1";
import Footer from "../../components/footer/Footer";
import Section1bar from "../../components/Section1bar";
import Section3 from "../../components/Section3/Section3";

import Section9 from "../../components/section9/Section9";

import Section2W from "../../components/WorkasPro/Section2/Section2";
import Section3W from "../../components/WorkasPro/Section3/Section3";
import Slider from "@/components/WorkasPro/slider/Slider";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Section1/>
      <Section1bar /> 
      <Section2W />
      <Section3W />
      <Section3 head="Realted Products" />
      <Slider />
      <Section9 />
      <Footer /> 
    </main>
  );
}
