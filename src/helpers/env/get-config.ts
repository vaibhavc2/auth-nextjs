import { Env } from "@/types";

export const getConfig = (): Env => {
  return {
    MONGO_URI: process.env.MONGO_URI,
    TOKEN_SECRET: process.env.TOKEN_SECRET,
    HASH_SECRET: process.env.HASH_SECRET,
    DOMAIN: process.env.DOMAIN
    // PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
  };
};
