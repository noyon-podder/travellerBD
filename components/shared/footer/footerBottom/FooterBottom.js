/**
 * Title: Write a program using JavaScript on FooterBottom
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
import FooterSocial from "./FooterSocial";
import FooterCopyright from "./FooterCopyright";
import FooterCredit from "./FooterCredit";

const FooterBottom = () => {
  return (
    <section>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <FooterSocial />
        <FooterCopyright />
        <FooterCredit />
      </div>
    </section>
  );
};

export default FooterBottom;
