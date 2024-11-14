import { z } from "zod";

export const userSignupSchema = z.object({
  fullname: z.string().min(1, "full name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "password must be at least 6 character"),
  contact: z.string().min(10, "contact number must be 10 digit"),
});
export type Signupinputstate = z.infer<typeof userSignupSchema>;

export const userLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "password must be at least 6 chracter"),
});
export type Logininputstate = z.infer<typeof userLoginSchema>;
