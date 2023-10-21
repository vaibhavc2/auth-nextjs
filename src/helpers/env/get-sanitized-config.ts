import { Env, EnvStrict } from "@/types";

export const getSanitizedConfig = (config: Env): EnvStrict => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`ERROR:: Missing key : ${key} in Environment Variables!`);
    }
  }
  return config as EnvStrict;
};
