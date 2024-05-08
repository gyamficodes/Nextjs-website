"use client"

import Bannercomp from "@/components/Banner/Bannercomp";
 import GetQuote from "../components/Quote/GetQuote.jsx";
 import Service from "@/components/Service/Service.jsx";
 import Feature from "@/components/Fearured/Feature.jsx";
import About from "@/components/About/About.jsx";
import Offer from "@/components/Offer/Offer.jsx";
import Awesome from "@/components/Awesome/Awesome.jsx";
import Testimonial from "@/components/Testimonial/Testimonial.jsx";
import Footer from "@/components/Footer/Footer.jsx";

export default function Home() {
  return (
  <>
<Bannercomp/>
<GetQuote/>
<Service/>
<Feature/>
<About/>
<Offer/>
<Awesome/>
<Testimonial/>
<Footer/>
  </>
  );
}
