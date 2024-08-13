import Section3 from "@/components/Section3/Section3";
import Footer from "../components/footer/Footer";
import Section1 from "../components/Section1";
import Section1bar from "../components/Section1bar";
import Section2 from "../components/Section2";
import Section4 from "../components/section4/Section4";
import Section5 from "../components/section5/Section5";
import Section6 from "../components/section6/Section6";
import Section7 from "../components/section7/Section7";
import Section9 from "../components/section9/Section9";

import Section8 from "@/components/Section8/Section8";



export default function Home() {
  return (
    <main className="overflow-hidden">
      <Section1 />
      <Section1bar />
      <Section2 />
      <Section3 head="Latest Products" />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Footer />


      </main>
  );
}
