/**
 * Title: Write a program using JavaScript on Offer
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

// import Image from "next/image";
import Container from "@/components/shared/container/Container";
import HighlightText from "@/components/shared/highlightText/HighlightText";
import LoadImage from "@/components/shared/image/LoadImage";
import React from "react";

const Offer = () => {
  return (
    <section
      className="bg-no-repeat bg-contain bg-center h-full py-12"
      style={{
        backgroundImage:
          "url(/assets/home-page/offer/tree1.svg), url(/assets/home-page/offer/tree2.svg)",
        backgroundPosition: "0% 0%, 100% 100%",
        backgroundSize: "251px 300px, 251px 300px",
      }}
    >
      <Container>
        <div className="w-full h-full flex flex-col gap-y-12">
          <article className="flex flex-col gap-y-4">
            <h1 className="lg:text-5xl md:text-4xl text-3xl whitespace-normal">
              <HighlightText>Offers</HighlightText> Explorer
              <LoadImage
                src="/assets/home-page/destination/underline.svg"
                alt="arrow"
                height={7}
                width={275}
                className="mt-1.5"
              />
            </h1>
            <p className="text-base">
              Promotions, deals, and special offers for you
            </p>
          </article>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <LoadImage
              src="/assets/static/Offers Explorer Banner/1.png"
              alt="offer-1"
              width={650}
              height={290}
              className="rounded object-cover border border-primary cursor-pointer"
              onClick={() => window.open("/tours", "_self")}
            />
            <LoadImage
              src="/assets/static/Offers Explorer Banner/2.png"
              alt="offer-2"
              width={650}
              height={290}
              className="rounded object-cover border border-primary cursor-pointer"
              onClick={() => window.open("/tours", "_self")}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Offer;
