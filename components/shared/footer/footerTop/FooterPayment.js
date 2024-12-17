/**
 * Title: Write a program using JavaScript on FooterPayment
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
import React from "react";
import Tooltip from "../../tooltip/Tooltip";
import LoadImage from "../../image/LoadImage";

const FooterPayment = () => {
  const methods = [
    {
      id: 1,
      name: "visa",
      logo: "/assets/payment-methods/visa.svg",
    },
    {
      id: 2,
      name: "mastercard",
      logo: "/assets/payment-methods/mastercard.svg",
    },
    {
      id: 3,
      name: "paypal",
      logo: "/assets/payment-methods/paypal.svg",
    },
    {
      id: 4,
      name: "gapy",
      logo: "/assets/payment-methods/gpay.svg",
    },
  ];

  // function toBase64(str) {
  //   return btoa(unescape(encodeURIComponent(str)));
  // }

  // function shimmer(width, height) {
  //   return `https://placehold.co/${width}x${height}.svg`;
  // }

  return (
    <section>
      <div className="flex flex-col gap-y-2">
        <h2 className="text-lg">Payment Methods</h2>
        <div className="flex flex-row flex-wrap gap-1.5">
          {methods.map(({ id, name, logo }) => (
            <span key={id}>
              <Tooltip text={name}>
                <LoadImage
                  src={logo}
                  alt={name}
                  width={50}
                  height={29}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                  // placeholder="blur"
                  // blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  //   shimmer(50, 29)
                  // )}`}
                />
              </Tooltip>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FooterPayment;
