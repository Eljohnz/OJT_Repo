"use server";

import { db } from "@/lib/db";

export async function register(values: any) {
  await db.user.create({
    data: {
      email: values.email,
      password: values.password,
      firstName: values.firstname,
      lastName: values.lastname,
    },
  });
}
