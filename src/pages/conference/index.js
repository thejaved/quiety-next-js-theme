import EventBlog from '@components/blogs/EventBlog';
import EventCounter from '@components/counter/EventCounter';
import EventCta from '@components/cta/EventCta';
import EventCustomerLogo from '@components/customer/EventCustomerLogo';
import EventAbout from '@components/events/EventAbout';
import EventSession from '@components/events/EventSession';
import SpeakerList from '@components/events/SpeakerList';
import UpcomingEvent from '@components/events/UpcomingEvent';
import HeroFifteen from '@components/hero-section/HeroFifteen';
import EventPrice from '@components/pricing/EventPrice';
import EventTestimonial from '@components/testimonial/EventTestimonial';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import Layout from '@layout/Layout';
import React from 'react';

const Conference = () => {
  return (
    <Layout>
      <Navbar classOption="position-absolute" />
      <HeroFifteen />
      <UpcomingEvent />
      <EventAbout />
      <SpeakerList />
      <EventCounter />
      <EventSession />
      <EventPrice />
      <EventTestimonial />
      <EventCta />
      <EventBlog />
      <EventCustomerLogo />
      <Footer footerGradient />
    </Layout>
  );
};

export default Conference;
