import { apiSlice } from "@/states/apiSlice";


export const authenticationSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        loginUser: builder.mutation({
            query: (data) => ({
                url: "/credentials-login",
                method: "POST",
                body: data,
                credentials: "include"
            }),
        }),
        signupUser: builder.mutation({
            query: (data) => ({
                url: "/register",
                method: "POST", 
                body: data,
                credentials: "include"
            })
        }),
        logoutUser: builder.mutation({
            query: () => ({
                url: "/logout",
                method: "DELETE",
                credentials: "include"
            })
        }),
        getProfile: builder.query({
            query: ()=>({
                url:"/users/profile",
                credentials: "include",
            })
        }),
        forgotPassword: builder.mutation({
            query:(email)=>({
              url:'/forgot-passsword',
              method:'POST',
              credentials:'include',
              body:{email},  
            })
        })
    })
})

export const {
    useLoginUserMutation,
    useSignupUserMutation,
    useGetProfileQuery,
    useLogoutUserMutation,
    useForgotPasswordMutation
} = authenticationSlice