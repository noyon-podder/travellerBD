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
import { useSelector } from "react-redux";

const LargeDevice = () => {
  const user = useSelector((state) => state?.auth);

  const items = [
    {
      id: 1,
      name: "Sign Up",
      href: "/auth/signup",
    },
    {
      id: 2,
      name: "Sign In",
      href: "/auth/signin",
    },
  ];

  return (
    <section>
      <div className="flex flex-row gap-x-4">
        {localStorage.getItem("accessToken") && Object.keys(user).length > 0 ? (
          <button
            type="button"
            className="text-sm"
            onClick={() => {
              localStorage.removeItem("accessToken");
              window.location.reload();
            }}
          >
            Logout
          </button>
        ) : (
          items.map(({ id, name, href }) => (
            <Link key={id} href={href} className="text-sm whitespace-nowrap">
              {name}
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default LargeDevice;
