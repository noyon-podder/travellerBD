/**
 * Title: Write a program using JavaScript on MenuItems
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
import OutsideClick from "../../outsideClick/OutsideClick";
import { useSelector } from "react-redux";

const MenuItems = ({ isOpen, setIsOpen }) => {
  const user = useSelector((state) => state?.auth);
  const handleOutsideClick = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {
      id: 1,
      name: "Dashboard",
      href: "/dashboard/add-rent",
    },
  ];

  const userItems = [
    {
      id: 2,
      name: "Sign Up",
      href: "/auth/signup",
    },
    {
      id: 3,
      name: "Sign In",
      href: "/auth/signin",
    },
  ];

  return (
    isOpen && (
      <OutsideClick onOutsideClick={handleOutsideClick}>
        <section className="absolute top-full right-0 w-40 mt-2 z-50">
          <div className="w-full h-full bg-secondary shadow rounded border border-primary/20">
            <div className="flex flex-col gap-y-3 py-primary">
              {Object.keys(user).length > 0 && (
                <>
                  <div className="flex flex-col gap-y-2 px-secondary">
                    {menuItems.map(({ id, name, href }) => (
                      <Link
                        key={id}
                        href={href}
                        className="flex justify-between group text-sm"
                      >
                        {name}{" "}
                        <span className="group-hover:opacity-100 opacity-5 font-bold">
                          →
                        </span>
                      </Link>
                    ))}
                  </div>
                  <hr className="border-primary/20" />
                </>
              )}
              <div className="flex flex-col gap-y-2 px-secondary">
                {localStorage.getItem("accessToken") &&
                Object.keys(user).length > 0 ? (
                  <button
                    type="button"
                    className="flex justify-between group text-sm"
                    onClick={() => {
                      localStorage.removeItem("accessToken");
                      window.location.reload();
                    }}
                  >
                    Logout{" "}
                    <span className="group-hover:opacity-100 opacity-5 font-bold">
                      →
                    </span>
                  </button>
                ) : (
                  userItems.map(({ id, name, href }) => (
                    <Link
                      key={id}
                      href={href}
                      className="flex justify-between group text-sm"
                    >
                      {name}{" "}
                      <span className="group-hover:opacity-100 opacity-5 font-bold">
                        →
                      </span>
                    </Link>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>
      </OutsideClick>
    )
  );
};

export default MenuItems;
