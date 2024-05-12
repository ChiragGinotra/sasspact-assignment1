import { Helmet } from "react-helmet";

import Footer1 from "../components/Footer/Footer1";
import Footer2 from "../components/Footer/Footer2";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import OurWork from "../components/OurWork/OurWork";
import Portfolio from "../components/Portfolio";
import Testimonial from "../components/TestimonialSection/Testimonial";
import WhatWeDo from "../components/WhatWeDo";
import WhoWeAre from "../components/WhoWeAre";

export default function HomePageLayout() {
  return (
    <>
      <Helmet>
        <title>Extensive | HomePage</title>
        <meta
          name="description"
          content="This is a homepage of Extensive Marketing"
        />
        <link rel="canonical" href="https://www.example.com/" />
        <meta name="keywords" content="extensive, marketing, homepage" />
        <meta name="publisher" content="Chirag" />
        {/* Add more meta tags as needed */}
      </Helmet>
      <Header />
      <LandingPage />
      <WhoWeAre />
      <WhatWeDo />
      <OurWork />
      <Portfolio />
      <Testimonial />
      <Footer1 />
      <Footer2 />
    </>
  );
}
