import Link from "next/link";

export default function ErrorPage() {
  return (
   <Link href="/">
    <div className="text-gray-900">
      <h1>Something went wrong during authentication</h1>
      <p>Please try again later or contact support.</p>
    </div>
   </Link>
  );
}
