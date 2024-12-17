/**
 * Title: Write a program using JavaScript on favoriteApi
 * Author: Noyon Podder
 * Portfolio: https://dev-noyon.vercel.app/
 * Linkedin: https://linkedin.com/in/dev-noyon
 * GitHub: https://github.com/noyon-podder
 * Facebook: https://www.facebook.com/noyon.Podder7/
 * Instagram: https://www.instagram.com/noyon.podder7/
 * Twitter: https://x.com/noyon_podder7
 * WhatsApp: https://wa.me/8801752441505
 * Telegram: https://t.me/Noyonpodder7
 * Date: 16 December 2024
 */

const { travelloApi } = require("../travello");

const favoriteApi = travelloApi.injectEndpoints({
  endpoints: (builder) => ({
    // add to favorite
    addToFavorite: builder.mutation({
      query: (body) => ({
        url: "/favorite/",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),

      invalidatesTags: ["Favorite", "User"],
    }),

    // get favorites list
    getFavorites: builder.query({
      query: () => ({
        url: "/favorite/",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),

      providesTags: ["Favorite"],
    }),

    // delete from favorites
    deleteFromFavorite: builder.mutation({
      query: (id) => ({
        url: `/favorite/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),

      invalidatesTags: ["Favorite", "User"],
    }),
  }),
});

export const {
  useAddToFavoriteMutation,
  useGetFavoritesQuery,
  useDeleteFromFavoriteMutation,
} = favoriteApi;
