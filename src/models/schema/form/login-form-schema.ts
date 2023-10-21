import * as z from "zod";

export const LoginFormSchema = z.object({
  username: z.string() || z.string().email(),
  password: z.string()
});
