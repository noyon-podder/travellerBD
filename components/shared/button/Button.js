/**
 * Title: Write a program using JavaScript on Button
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

const Button = ({ children, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={
        "text-sm bg-primary/80 text-white rounded-secondary border-primary border-b-[5px] border-solid hover:bg-primary/90 hover:text-black transition-all delay-100" +
        ` ${className}`
      }
    >
      {children}
    </button>
  );
};

export default Button;
