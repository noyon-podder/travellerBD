/**
 * Title: Write a program using JavaScript on cartCard
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

const CartCard = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="h-8 w-8 rounded bg-gray-200 animate-pulse" />
      <div className="flex flex-col gap-y-2">
        <div className="h-6 w-full rounded bg-gray-200 animate-pulse" />
        <div className="h-3 w-3/4 rounded bg-gray-200 animate-pulse" />
        <div className="flex gap-x-2 items-center">
          <div className="w-5 h-5 rounded-secondary bg-gray-200 animate-pulse" />
          <div className="w-2/5 h-4 rounded bg-gray-200 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
