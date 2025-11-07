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
                productId:"d5016dec-e360-43a2-aa7a-59826225dedb",
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