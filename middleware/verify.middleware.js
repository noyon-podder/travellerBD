/**
 * Title: Write a program using JavaScript on verify.middleware
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

import jwt from "jsonwebtoken";
import { promisify } from "util";

export default async function verify(req, res, next) {
  try {
    const token = req.headers?.authorization?.split(" ")[1];

    if (!token) {
      return res.send({
        acknowledgement: false,
        message: "Unauthorized, No token found",
      });
    }

    const decoded = await promisify(jwt.verify)(
      token,
      process.env.TOKEN_SECRET
    );
    req.user = decoded;

    next();
  } catch (error) {
    return res.send({
      acknowledgement: false,
      message: "Unauthorized, Invalid token",
    });
  }
}
