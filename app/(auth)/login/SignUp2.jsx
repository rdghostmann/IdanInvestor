"use client";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import InvestJarLogo from "../../../public/investjar2.png"

const Signup2 = ({
  heading = "InvestJar",
  subheading = "Sign up for free.",
  logo = {
    url: "https://www.shadcnblocks.com",
    src: InvestJarLogo,
    alt: "logo",
  },
  googleText = "Sign up with Google",
  signupText = "Create an account",
  loginText = "Already have an account?",
  loginUrl = "/lgoin",
}) => {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      return Swal.fire("Error", "Email and password are required", "error");
    }

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        Swal.fire("Error", result.error, "error");
      } else {
        Swal.fire("Success", "Login successful", "success").then(() => {
          router.push("/dashboard"); // Redirect to dashboard on success
        });
      }
    } catch (error) {
      Swal.fire("Error", "An error occurred. Please try again.", "error");
    }
  };



  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-4">
          <form onSubmit={handleSubmit} className="mx-auto w-full max-w-sm rounded-md p-6 shadow">
            <div className="mb-6 flex flex-col items-center">
              <Link href={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="mb-7 h-10 w-auto"
                />
              </Link>
              <p className="mb-2 text-2xl font-bold">{heading}</p>
              <p className="text-muted-foreground">{subheading}</p>
            </div>
            <div>
              <div className="grid gap-4">
                <Input type="email" name="email" placeholder="Enter your email" required />
                <div>
                  <div className="text-sm">
                    <Link href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</Link>
                  </div>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <Button type="submit" className="mt-2 w-full">
                  {signupText}
                </Button>
                <Button variant="outline" className="w-full">
                  <FcGoogle className="mr-2 size-5" />
                  {googleText}
                </Button>
              </div>
              <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
                <p>{loginText}</p>
                <Link href={loginUrl} className="font-medium text-primary">
                  Log in
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup2;
