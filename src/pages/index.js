import Layout from "@layout/Layout";
import FaqOne from "@components/faq/FaqOne";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import PricingOne from "@components/pricing/PricingOne";
import FeatureOne from "@components/features/FeatureOne";
import SupportOne from "@components/support/SupportOne";
import IntegrationOne from "@components/integration/IntegrationOne";
import TestimonialOne from "@components/testimonial/TestimonialOne";
import WorkProcessOne from "@components/workprocess/WorkProcessOne";
import HeroSectionOne from "@components/hero-section/HeroSectionOne";
import FeatureImgContentOne from "@components/feature-img-content/FeatureImgContentOne";

export default function Home() {
  return (
    <Layout>
      <Navbar navDark />
      <HeroSectionOne />
      <FeatureOne />
      <FeatureImgContentOne />
      <TestimonialOne darkBg />
      <WorkProcessOne />
      <PricingOne header="true" />
      <FaqOne />
      <IntegrationOne />
      <SupportOne />
      <Footer footerGradient />
    </Layout>
  );
}
