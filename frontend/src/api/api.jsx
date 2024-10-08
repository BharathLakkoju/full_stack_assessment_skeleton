import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/user/find-all',
      providesTags: ['User'], 
    }),
    getHomesByUser: builder.query({
      query: (username) => `/home/find-by-user?username=${username}`,
      providesTags: ['Home'], 
    }),
    getUsersByHome: builder.query({
      query: (streetAddress) => `/user/find-by-home?street_address=${streetAddress}`,
      providesTags: ['User'], 
    }),
    updateUsersForHome: builder.mutation({
      query: ({ streetAddress, usernames }) => ({
        url: '/home/update-users',
        method: 'POST',
        body: { street_address: streetAddress, user_ids: usernames },
      }),
      invalidatesTags: ['Home', 'User'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetHomesByUserQuery,
  useGetUsersByHomeQuery,
  useUpdateUsersForHomeMutation,
} = api;