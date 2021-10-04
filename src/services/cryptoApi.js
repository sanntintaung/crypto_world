import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'd032352514msha0f81ace48b6345p10a26ejsn8c52e1257658'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = url => ({
    url,
    headers: cryptoApiHeaders,
})

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: builder => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getExchanges: builder.query({
            query: () => createRequest(`/exchanges`),
        }),
        getCryptosDetail: builder.query({
            query:(coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptosHistory: builder.query({
            query:({coinId,timeperiod}) => createRequest(`/coin/${coinId}/history/${timeperiod}`),
        }),
    })
})

export const { useGetCryptosQuery,useGetExchangesQuery, useGetCryptosDetailQuery , useGetCryptosHistoryQuery } = cryptoApi;