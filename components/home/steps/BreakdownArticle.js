/**
 * Title: Write a program using JavaScript on BreakdownArticle
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
import { BiCar } from "react-icons/bi";
import { MdLocationCity, MdPayment } from "react-icons/md";

const BreakdownArticle = () => {
  const items = [
    {
      title: "Choose Location",
      icon: <MdLocationCity className="w-8 h-8 text-primary" />,
      description: "Start your journey by selecting your ideal destination.",
    },
    {
      title: "Secure and Easy Payment",
      icon: <MdPayment className="w-8 h-8 text-primary" />,
      description:
        "Effortless transactions for a worry-free travel experience.",
    },
    {
      title: "Reach Agency on Selected Date",
      icon: <BiCar className="w-8 h-8 text-primary" />,
      description:
        "Contact us to finalize your travel plans on the chosen date.",
    },
  ];

  return (
    <section className="flex lg:flex-wrap lg:flex-row flex-col gap-4">
      {items.map(({ title, icon, description }, index) => (
        <article
          key={index}
          className="group border border-secondary hover:border-primary transition-colors delay-100 ease-linear p-4 rounded flex flex-col gap-y-2.5 relative overflow-hidden lg:flex-1 lg:basis-60"
        >
          <span className="border w-fit p-2 rounded-primary border-secondary group-hover:border-primary transition-colors delay-100 ease-linear">
            {icon}
          </span>
          <div className="flex flex-col gap-y-0.5 z-10">
            <h2 className="text-lg">{title}</h2>
            <p className="text-sm">{description}</p>
          </div>
          <span className="absolute -bottom-10 right-4 text-secondary/50 text-9xl font-sans group-hover:-bottom-0 transition-all delay-100 ease-linear">
            0{index + 1}
          </span>
        </article>
      ))}
    </section>
  );
};

export default BreakdownArticle;
