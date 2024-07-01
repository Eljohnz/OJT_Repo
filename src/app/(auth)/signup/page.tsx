import React from "react";
import { UserRegisterForm } from "@/components/forms/register-form";

export default function SignupPage() {
  return (
    <div className="relative h-screen flex-col items-center justify-center lg:px-0">
      <div className="flex h-full items-center p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>
            <p className="text-sm text-muted-foreground">
              Enter your information to create an account
            </p>
          </div>
          <UserRegisterForm />
        </div>
      </div>
    </div>
  );
}
