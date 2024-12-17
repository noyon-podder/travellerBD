/**
 * Title: Write a program using JavaScript on index
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

import Banner from "@/components/tours/Banner";
import Destinations from "@/components/tours/Destinations";
import Main from "@/layouts/Main";
import Head from "next/head";
import React from "react";

const Tours = () => {
  return (
    <main>
      <Head>
        <title>
          Travel Landing Page by Travello - Filter Your Required Travels
        </title>
      </Head>
      <Main>
        <Banner />
        <Destinations />
      </Main>
    </main>
  );
};

export default Tours;
