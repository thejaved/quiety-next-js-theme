import React from "react";
import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import HeroSectionTen from "@components/hero-section/HeroSectionTen";
import CustomerLogoSlider from "@components/customer/CustomerLogoSlider";
import CyberAbout from "@components/our-story/CyberAbout";
import { CyberService } from "@components/services/CyberService";
import CyberCta from "@components/cta/CyberCta";
import VideoPromo from "@components/promo/VideoPromo";
import PriceThree from "@components/pricing/PriceThree";
import FooterTwo from "@layout/Footer/FooterTwo";
import CyberBlog from "@components/blogs/CyberBlog";
import CyberProduct from "@components/product/CyberProduct";
import TestimonialSix from "@components/testimonial/TestimonialSix";
import FaqFour from "@components/faq/FaqFour";

//this is for Cyber Security demo

const CyberSecurity = () => {
  return (
    <Layout>
      <Navbar navDark />
      <HeroSectionTen />
      <CustomerLogoSlider />
      <CyberAbout />
      <CyberService />
      <CyberCta />
      <VideoPromo />
      <PriceThree />
      <CyberProduct />
      <TestimonialSix />
      <FaqFour />
      <CyberBlog />
      <FooterTwo />
    </Layout>
  );
};

export default CyberSecurity;
