import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const searchApi = createApi({
  reducerPath: 'search',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  endpoints: builder => ({
    getSearch: builder.query({
      query: keyword => `/api/v1/search-conditions/?name=${keyword}`,
    }),
  }),
});

export const {useGetSearchQuery} = searchApi;
