import React from 'react';
import Layout from '@layout/Layout';
import Navbar from '@layout/Header/Navbar';
import HeroSectionEleven from '@components/hero-section/HeroSectionEleven';
import CryptoFooter from '@layout/Footer/CryptoFooter';
import CryptoCta from '@components/cta/CryptoCta';
import CryptoPromo from '@components/promo/CryptoPromo';
import CryptoCusomerCounter from '@components/counter/CryptoCusomerCounter';
import CryptoTable from '@components/table/CryptoTable';
import CountDown from '@components/counter/CountDown';
import CryptoCtaOne from '@components/cta/CryptoCtaOne';
import OurTeamTwo from '@components/our-team/OurTeamTwo';
import HowItAllStarted from '@components/promo/HowItAllStarted';
import TestimonialFour from '@components/testimonial/TestimonialFour';
import CryptoBlog from '@components/blogs/CryptoBlog';

//this is for crypto landing demo

const CryptoLanding = () => {
  return (
    <Layout>
      <Navbar navDark />
      <HeroSectionEleven />
      <CryptoPromo />
      <CryptoCusomerCounter />
      <CryptoTable />
      <CountDown />
      <CryptoCtaOne />
      <OurTeamTwo />
      <HowItAllStarted />
      <TestimonialFour />
      <CryptoBlog />
      <CryptoCta />
      <CryptoFooter />
    </Layout>
  );
};

export default CryptoLanding;
