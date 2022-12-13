import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "nextjs777",
    apiKey: process.env.API_KEY,
});