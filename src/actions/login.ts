"use server";

import * as zod from "zod";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { LoginSchema } from "@/lib/form-schema";
import bcrypt from "bcrypt";
import { getUserByEmail } from "./data";

export async function login(
  callbackUrl: string,
  credentials: zod.infer<typeof LoginSchema>
) {
  const validatedFields = LoginSchema.safeParse(credentials);

  if (!validatedFields.success) {
    return { error: "Invalid fields." };
  }

  const { email, password } = validatedFields.data;
  const user = await getUserByEmail(email);

  const passwordMatch = await bcrypt.compare(password, user?.password!);

  if (!user || !passwordMatch) {
    return { error: "Invalid credentials provided!" };
  }

  try {
    console.log("???");
    await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl ?? "/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin": {
          return { error: "Invalid credentials" };
        }
      }
    }
  }

  return { success: "Logged in successfully!" };
}
