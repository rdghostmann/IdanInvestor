"use client";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader  from 'lucide-react

const LoadingScreen = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-500 border-solid"></div>
        <p className="text-white mt-4 text-lg font-semibold">Registering...</p>
      </div>
    </div>
  );
};

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Show loading screen

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      setIsLoading(false);
      return Swal.fire("Error", "Email and password are required", "error");
    }

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      setIsLoading(false); // Hide loading screen

      if (result?.error) {
        setIsLoading(false); // Hide loading screen
        Swal.fire("Error", result.error, "error");
      } else {
        setIsLoading(false); // Hide loading screen
        Swal.fire("Success", "Login successful", "success").then(() => {
          router.push("/dashboard"); // Redirect to dashboard on success
        });
      }
    } catch (error) {
      setIsLoading(false);
      Swal.fire("Error", "An error occurred. Please try again.", "error");
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <LoadingScreen isLoading={isLoading} />
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</Label>
            <div className="mt-2">
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</Label>
              <div className="text-sm">
                <Link href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</Link>
              </div>
            </div>
            <div className="mt-2">
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                required
              />
            </div>
          </div>


          <div>
            <Button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            {isLoading ? <Loader className="text-white animate-spin size-1" /> : "Register"}
            </Button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          <span className="mr-1">Don't have an account</span>
          <Link href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
