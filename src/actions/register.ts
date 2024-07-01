"use server";

import * as zod from "zod";
import bcrypt from "bcrypt";

import { db } from "@/lib/db";
import { RegisterSchema } from "@/lib/form-schema";

export async function register(values: zod.infer<typeof RegisterSchema>) {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid credentials" };
  }

  const { email, password, lastname, firstname } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await db.user.findUnique({
    where: { email, lastName: lastname, firstName: firstname },
  });

  if (existingUser) {
    return { error: "User already exists" };
  }

  await db.user.create({
    data: {
      email: email,
      password: hashedPassword,
      firstName: firstname,
      lastName: lastname,
    },
  });

  return { success: "User created" };
}
