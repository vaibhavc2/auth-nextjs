// import { HASH_SECRET } from "@/config/env";
// import * as argon2 from "argon2";
// import { getErrorMessage } from ".";

// export const hashPassword = async (password: string) => {
//   try {
//     const hashString = argon2.hash(password, {
//       secret: Buffer.from(HASH_SECRET)
//     });
//     return hashString;
//   } catch (error) {
//     throw new Error(getErrorMessage(error));
//   }
// };

// export const verifyPassword = async (hashString: string, password: string) => {
//   try {
//     const isVerified = await argon2.verify(hashString, password, {
//       secret: Buffer.from(HASH_SECRET)
//     });
//     return isVerified;
//   } catch (error) {
//     throw new Error(getErrorMessage(error));
//   }
// };
