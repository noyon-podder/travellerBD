/**
 * Title: Write a program using JavaScript on FooterTop
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

import React from "react";
import FooterLogo from "./FooterLogo";
import FooterItems from "./FooterItems";
import FooterPayment from "./FooterPayment";

const FooterTop = () => {
  return (
    <section>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <FooterLogo />
        <FooterItems />
        <section className="lg:block hidden">
          <FooterPayment />
        </section>
      </div>
    </section>
  );
};

export default FooterTop;
