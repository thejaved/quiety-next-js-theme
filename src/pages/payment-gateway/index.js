import React from "react";
import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";
import HeroThirteen from "@components/hero-section/HeroThirteen";
import Footer from "@layout/Footer/Footer";
import PaymentCustomer from "@components/customer/PaymentCustomer";
import PaymentFeature from "@components/feature-img-content/PaymentFeature";
import WorkProcessFive from "@components/workprocess/WorkProcessFive";
import PaymentCounter from "@components/counter/PaymentCounter";
import PaymentFeatureTwo from "@components/feature-img-content/PaymentFeatureTwo";
import PaymentTestimonial from "@components/testimonial/PaymentTestimonial";
import PaymentCta from "@components/cta/PaymentCta";

const PaymentGateway = () => {
  return (
    <Layout title="Payment Gateway">
      <Navbar navDark />
      <HeroThirteen />
      <PaymentCustomer />
      <PaymentFeature />
      <WorkProcessFive />
      <PaymentFeatureTwo />
      <PaymentCounter />
      <PaymentTestimonial />
      <PaymentCta />
      <Footer
        style={{
          background: "url('/page-header-bg.svg')no-repeat bottom right",
        }}
      />
    </Layout>
  );
};

export default PaymentGateway;
