import { z } from "zod";

export const SignUpSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .max(18, { message: "Password must not exceed 18 characters." }),
});

export const defaultSignUpSchemaValues = {
  email: "",
  password: "",
};

export const SignInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .max(18, { message: "Password must not exceed 18 characters." }),
});

export const defaultSignInSchemaValues = {
  email: "",
  password: "",
};
