import * as z from "zod";

export const SignupFormSchema = z.object({
  username: z
    .string()
    .min(4, {
      message: "Username must be at least 4 characters."
    })
    .max(20, {
      message: "Username must not exceed 20 characters."
    })
    .regex(/^[a-z\d]+_?[a-z\d]+$/, {
      message:
        "Username can only be alpha-numeric, without spaces. '_' can be used."
    }),
  email: z.string().email({ message: "Enter a valid email." }),
  password: z.string().regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).{8,}$/, {
    message:
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one symbol. Min length should be 8 characters."
  })
});
