import InsuranceAchievement from "@components/achievement/InsuranceAchievement";
import InsuranceContact from "@components/contact-us/InsuranceContact";
import InsuranceReview from "@components/review/InsuranceReview";
import InsuranceGallery from "@components/gallery/InsuranceGallery";
import HeroSixteen from "@components/hero-section/HeroSixteen";
import InsuranceService from "@components/services/InsuranceService";
import InsuranceTeam from "@components/our-team/InsuranceTeam";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";
import React from "react";
import InsuranceSubscription from "@components/subscription/InsuranceSubscription";
import InsuranceBlog from "@components/blogs/InsuranceBlog";

const QuietyInsurance = () => {
  return (
    <Layout classOpt="bg-soft-blue">
      <Navbar insurance />
      <HeroSixteen />
      <InsuranceService />
      <InsuranceGallery />
      <InsuranceAchievement />
      <InsuranceContact />
      <InsuranceTeam />
      <InsuranceReview />
      <InsuranceSubscription />
      <InsuranceBlog />
      <Footer
        style={{
          background: "url('/page-header-bg.svg')no-repeat bottom right",
        }}
      />
    </Layout>
  );
};

export default QuietyInsurance;
