"use client";

import Image from "next/image";
import spinnerImg from "../public/Spinner.gif";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <Image src={spinnerImg} alt="Loading..." width={50} height={50} priority />
    </div>
  );
}
