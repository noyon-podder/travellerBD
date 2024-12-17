/**
 * Title: Write a program using JavaScript on cartApi
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

const { travelloApi } = require("../travello");

const cartApi = travelloApi.injectEndpoints({
  endpoints: (builder) => ({
    // add to cart
    addToCart: builder.mutation({
      query: (body) => ({
        url: "/cart/",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),

      invalidatesTags: ["Cart", "User"],
    }),

    // get cart
    getCart: builder.query({
      query: () => ({
        url: "/cart/",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),

      providesTags: ["Cart"],
    }),

    // remove from cart
    removeFromCart: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),

      invalidatesTags: ["Cart", "User"],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetCartQuery,
  useRemoveFromCartMutation,
} = cartApi;
