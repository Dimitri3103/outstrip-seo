import { apiSlice } from '../services/apiSlice';

const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        register: builder.mutation({
            query: ({ email, last_name, first_name, password, confirm_password }) => ({
                url: '/api/auth/register/',
                method: 'POST',
                body: { email, last_name, first_name, password, confirm_password },
            }),
        }),
        login: builder.mutation({
            query: ({ email, password }) => ({
                url: '/api/auth/login/',
                method: 'POST',
                body: { email, password },
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/api/auth/logout/',
                method: 'POST',
            }),
        }),
        resetPassword: builder.mutation({
            query: ({ email, password, confirmPassword, otp }) => ({
                url: `/api/auth/reset_password/`,
                method: 'POST',
                body: { email, password, confirmPassword, otp },
            }),
        }),
        resetPasswordEmail: builder.mutation({
            query: ({ email }) => ({
                url: `/api/auth/reset_password_email/`,
                method: 'POST',
                body: { email },
            }),
        }),
        changePassword: builder.mutation({
            query: ({ oldPassword, newPassword }) => ({
                url: `/api/auth/change_password/`,
                method: 'POST',
                body: { oldPassword, newPassword },
            }),
        }),
        verify: builder.mutation({
            query: () => ({
                url: '/api/auth/verify/',
                method: 'POST',
            }),
        }),
        getMetada: builder.mutation({
            query: ({ url }) => ({
                url: '/api/seotool/metaData/',
                method: 'POST',
                body: { url }
            }),
        }),
        getPerformance: builder.mutation({
            query: ({ url }) => ({
                url: '/api/seotool/performance/',
                method: 'POST',
                body: { url }
            }),
        }),
        getReference: builder.mutation({
            query: ({ url }) => ({
                url: '/api/seotool/reference/',
                method: 'POST',
                body: { url }
            }),
        }),
        getAdvance: builder.mutation({
            query: ({ url }) => ({
                url: '/api/seotool/advance/',
                method: 'POST',
                body: { url }
            }),
        }),
        getScore: builder.mutation({
            query: ({ url }) => ({
                url: '/api/seotool/score/',
                method: 'POST',
                body: { url }
            }),
        }),
        retrieveUser: builder.query<any, void>({
            query: () => '/api/user/retrieve/',
        }),
        google: builder.mutation({
            query: ({ email, last_name, first_name, google_picture }) => ({
                url: '/api/auth/google/',
                method: 'POST',
                body: { email, last_name, first_name, google_picture },
            }),
        }),
        getScreenshot: builder.mutation({
            query: ({ url }) => ({
                url: '/api/seotool/screenshot/',
                method: 'POST',
                body: { url }
            }),
        }),
    }),
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useLogoutMutation,
    useResetPasswordMutation,
    useResetPasswordEmailMutation,
    useChangePasswordMutation,
    useVerifyMutation,
    useGetMetadaMutation,
    useGetPerformanceMutation,
    useGetReferenceMutation,
    useGetAdvanceMutation,
    useGetScoreMutation,
    useRetrieveUserQuery,
    useGoogleMutation,
    useGetScreenshotMutation
} = authApiSlice;