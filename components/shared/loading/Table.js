/**
 * Title: Write a program using JavaScript on Table
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

const Table = ({ repeat }) => {
  return (
    <tr className="bg-white hover:bg-secondary/50 transition-colors">
      {Array(repeat)
        .fill(0)
        .map((_, index) => (
          <td
            key={index}
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
          >
            <span className="h-5 animate-pulse w-40 rounded block bg-gray-200 border" />
          </td>
        ))}
    </tr>
  );
};

export default Table;
