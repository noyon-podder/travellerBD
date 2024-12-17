/**
 * Title: Write a program using JavaScript on AdvantageBanner
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

import LoadImage from "@/components/shared/image/LoadImage";
import React from "react";

const AdvantageBanner = () => {
  return (
    <LoadImage
      src="/assets/static/Choosing Us Banner.png"
      alt={"advantage"}
      height={633}
      width={541}
      className="w-full rounded border border-primary"
    />
  );
};

export default AdvantageBanner;
