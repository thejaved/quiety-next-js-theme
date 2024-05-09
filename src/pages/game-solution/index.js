import React from "react";
import GameCounter from "@components/counter/GameCounter";
import GameFaq from "@components/faq/GameFaq";
import GameFeatures from "@components/features/GameFeaures";
import HeroTwelve from "@components/hero-section/HeroTwelve";
import GamePrice from "@components/pricing/GamePrice";
import GameReview from "@components/review/GameReview";
import GameServer from "@components/server/GameServer";
import GameServices from "@components/services/GameServices";
import GameFooter from "@layout/Footer/GameFooter";
import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";

const GameSolution = () => {
  return (
    <Layout title="Game Server" classOpt="bg-black">
      <Navbar navDark />
      <HeroTwelve />
      <GameServer />
      <GameServices />
      <GameFeatures />
      <GameCounter />
      <GamePrice />
      <GameFaq />
      <GameReview />
      <GameFooter />
    </Layout>
  );
};

export default GameSolution;
