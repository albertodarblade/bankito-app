import { IWalletSumary } from "@/types";
import api from ".";

export const walletsQueries = api.injectEndpoints({
  endpoints: (builder) => ({
    getWallets: builder.query<IWalletSumary[], null>({
      query: () => `wallets`,
      providesTags: ["wallets"],
    }),
    postWallet: builder.mutation({
      query: (payload) => ({
        url: `/wallets/`,
        method: "post",
        body: payload,
      }),
      invalidatesTags: ["wallets"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetWalletsQuery, usePostWalletMutation } =
  walletsQueries;
