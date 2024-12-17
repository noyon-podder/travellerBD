/**
 * Title: Write a program using JavaScript on MobileMenu
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

// import Image from "next/image";
import React, { useState } from "react";
import MenuItems from "./MenuItems";
import LoadImage from "../../image/LoadImage";
import { useSelector } from "react-redux";
import { HiOutlineUser } from "react-icons/hi";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state?.auth);

  return (
    <div className="relative">
      <button
        className="p-1.5 shadow rounded border-primary/20 border"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HiOutlineUser className="text-lg" />
      </button>
      <MenuItems isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default MobileMenu;
