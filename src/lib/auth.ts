import { betterAuth } from "better-auth";
import {checkout,polar,portal} from "@polar-sh/better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./db";
import { polarClient } from "./polar";

export const auth = betterAuth({
  database: prismaAdapter(prisma,{
    provider: "postgresql"
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true
  },
  plugins: [
    polar({
      client: polarClient,
      createCustomerOnSignUp: true,
      use :[
        checkout({
            products:[
              {
                productId:"8ccaca7b-f2a8-4304-9630-aaf9fc00bc1d",
                slug:"pro",

              }
            ],
            successUrl: process.env.POLAR_SUCCESS_URL,
            authenticatedUsersOnly: true,
        }),
        portal()
      ],
    })

  ]
});