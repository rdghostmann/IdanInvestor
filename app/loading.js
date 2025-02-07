"use client";

import Image from "next/image";
import spinnerImg from "../public/Spinner.gif"

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Image src={spinnerImg} alt="Loading..." width={50} height={50} />
    </div>
  );
}
