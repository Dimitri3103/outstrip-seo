import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { setAuth, logout } from '../features/authSlice';
import { Mutex } from 'async-mutex';
import { getCookie } from "cookies-next";

const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
    baseUrl: `https://api.tenteeglobal.com/seo-toolbox`,
    prepareHeaders: (headers) => {
        const accessToken = getCookie('tokenSEO');
        if (accessToken) {
            headers.set("Authorization", `Token ${accessToken}`);
        }
        return headers;
    },
});
const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args: any, api: any, extraOptions: any) => {
    await mutex.waitForUnlock();
    let result = await baseQuery(args, api, extraOptions);
    return result;
};

export const apiSlice = createApi({
    reducerPath: 'seotoolbox',
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({}),
});