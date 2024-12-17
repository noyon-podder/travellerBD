/**
 * Title: Write a program using JavaScript on Hero
 * Author: Noyon Podder
 * Portfolio: https://dev-noyon.vercel.app/
 * Linkedin: https://linkedin.com/in/dev-noyon
 * GitHub: https://github.com/noyon-podder
 * Facebook: https://www.facebook.com/noyon.Podder7/
 * Instagram: https://www.instagram.com/noyon.podder7/
 * Twitter: https://x.com/noyon_podder7
 * WhatsApp: https://wa.me/8801752441505
 * Telegram: https://t.me/Noyonpodder7
 * Date: 17 December 2024
 */

import Container from "@/components/shared/container/Container";
import React from "react";
import HeroDescription from "./HeroDescription";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <section
      className="py-12 bg-no-repeat bg-cover bg-bottom"
      style={{
        backgroundImage: "url(/assets/home-page/banner/bannerBg.svg)",
      }}
    >
      <Container>
        <div className="flex flex-col gap-y-12">
          <div className="grid md:grid-cols-12 md:items-center gap-12 grid-cols-1">
            <HeroDescription />
            <HeroSlider />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
