"use client";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";


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


export default function RegisterForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Show loading screen


    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (!username || !email || !password || !confirmPassword) {
      setIsLoading(false);
      return Swal.fire("Error", "All fields are required", "error");
    }

    if (password !== confirmPassword) {
      setIsLoading(false);
      return Swal.fire("Error", "Passwords do not match", "error");
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        Swal.fire("Success", "Registration successful", "success");
        router.push("/login");
        router.refresh();
      } else {
        const errorData = await response.json();
        Swal.fire("Error", errorData.message || "Registration failed", "error");
      }
    } catch (error) {
      Swal.fire("Error", "An error occurred. Please try again.", "error");
    } finally {
      setIsLoading(false); // Hide loading screen
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <LoadingScreen isLoading={isLoading} />
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-300">
          CREATE AN ACCOUNT
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">Username</label>

            <input type="text"
              name="username"
              placeholder="Username"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              required
            />
          </div>


          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email</label>
            <input type="email"
              name="email"
              placeholder="Email"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>

            <input type="password"
              name="password"
              placeholder="Password"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm/6 font-medium text-gray-900">Confirm Password</label>

            <input type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              required
            />
          </div>

          <div>
            <button type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Register
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm/6 text-gray-500">
          <span className="mr-1">Already have an account</span>
          <Link href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">Log in</Link>
        </p>
      </div>
    </div>
  );
}
