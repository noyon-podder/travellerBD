/**
 * Title: Write a program using JavaScript on Container
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

const Container = ({ children, className }) => {
  return (
    <section
      className={
        "max-w-7xl mx-auto px-primary" + (className ? ` ${className}` : "")
      }
    >
      {children}
    </section>
  );
};

export default Container;
