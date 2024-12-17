/**
 * Title: Write a program using JavaScript on upload.middleware
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

import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";

/* cloudinary config */
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

// configure multer storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (_, file) => {
    return {
      folder: "travello-template",
      public_id: `${Date.now()}_${file.originalname
        .replace(/[^\w\s.-]/g, "")
        .replace(/\s+/g, "-")
        .toLowerCase()}`,
    };
  },
});

const upload = multer({
  storage,
  fileFilter: (_, file, cb) => {
    const supportedImage = /jpg|jpeg|png/i; // Adjusted regex for case-insensitive matching
    const originalname = file.originalname;
    const extension = originalname.substring(originalname.lastIndexOf(".") + 1);

    if (supportedImage.test(extension)) {
      cb(null, true);
    } else {
      cb(new Error("Must be a png/jpg/jpeg format"));
    }
  },
});

export default upload;
