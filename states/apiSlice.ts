import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api', // optional
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
    endpoints: _builder => ({}) // eslint-disable-line @typescript-eslint/no-unused-vars
})