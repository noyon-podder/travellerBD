/**
 * Title: Write a program using JavaScript on LargeDevice
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

import Link from "next/link";
import React from "react";

const LargeDevice = () => {
  const items = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "Flights",
      href: "#flights",
    },
    {
      id: 3,
      name: "Hotels",
      href: "#hotels",
    },
    {
      id: 4,
      name: "Deals",
      href: "#deals",
    },
    {
      id: 5,
      name: "Blogs",
      href: "#blogs",
    },
    {
      id: 6,
      name: "Dashboard",
      href: "/dashboard",
    },
  ];

  return (
    <section>
      <div className="flex flex-row gap-x-4">
        {items.map(({ id, name, href }) => (
          <Link key={id} href={href} className="text-sm">
            {name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LargeDevice;
