/**
 * Title: Write a program using JavaScript on Destination
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
import DestinationDescription from "./DestinationDescription";
import DestinationSlider from "./DestinationSlider";

const Destination = () => {
  return (
    <section className="py-12">
      <Container>
        <div className="grid md:grid-cols-12 md:items-center gap-12 grid-cols-1">
            <DestinationDescription/>
            <DestinationSlider/>
        </div>
      </Container>
    </section>
  );
};

export default Destination;
