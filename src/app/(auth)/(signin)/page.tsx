import { Metadata } from "next";
import UserAuthForm from "@/components/forms/login-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Authentication forms built using the components.",
};

export default function SigninPage() {
  return (
    <div className="relative h-screen flex-col items-center justify-center  lg:px-0">
      <div className="flex h-full items-center p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
            <p className="text-sm text-muted-foreground">
              Enter your email and password below to sign in to your account.
            </p>
          </div>
          <UserAuthForm />
        </div>
      </div>
    </div>
  );
}
