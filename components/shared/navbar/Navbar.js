/**
 * Title: Write a program using JavaScript on Navbar
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
import Logo from "../logo/Logo";
import Container from "../container/Container";
import UserMenu from "./userMenu/UserMenu";

const Navbar = () => {
  return (
    <header className="bg-secondary">
      <Container>
        <nav className="py-4">
          <section className="flex flex-row justify-between items-center">
            {/* <Logo /> */}
            <h2 className="text-2xl font-bold">TravelBD</h2>
            <UserMenu />
          </section>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
