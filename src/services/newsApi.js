import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {cryptoApi} from "./cryptoApi";

const newsApiHeaders =  {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'd032352514msha0f81ace48b6345p10a26ejsn8c52e1257658'
}

const baseUrl= 'https://bing-news-search1.p.rapidapi.com';

const createRequest = url => ({
    url,
    headers: newsApiHeaders,
})

export const newsApi = createApi({
    reducerPath:'newsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: builder => ({
        getNews: builder.query({
            query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const { useGetNewsQuery } = newsApi;