/**
 * Title: Write a program using JavaScript on authorization.middleware
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

const authorization = (...role) => {
  return (req, res, next) => {
    const userRole = req.user.role;

    if (!role.includes(userRole)) {
      return res.send({
        success: false,
        message: "You are not authorized to access this feature",
      });
    }
    next();
  };
};

export default authorization;
