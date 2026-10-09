import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.BETTER_AUTH_MONGODB);
const db = client.db("Bazar_dor_user");

export const auth = betterAuth({
    emailAndPassword: { 
    enabled: true, 
  }, 

  baseURL: process.env.BETTER_AUTH_URL, 
    socialProviders: {
        google: { 
            clientId: process.env.BETTER_AUTH_GOOGLE_CLIENT_ID , 
            clientSecret: process.env.BETTER_AUTH_GOOGLE_CLIENT_SECRET , 
        }, 
        github: { 
            clientId: process.env.BETTER_AUTH_GITHUB_CLIENT_ID , 
            clientSecret: process.env.BETTER_AUTH_GITHUB_CLIENT_SECRET , 
        },
    },

  database: mongodbAdapter(db, {
    client,
  }),
});