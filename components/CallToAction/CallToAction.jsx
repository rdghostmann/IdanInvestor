import { Button } from "@/components/ui/button"
import { Phone, MessageSquare, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import earth from "../../public/earth.png"

export default function CallToAction() {
  return (
    <section className="py-16 bg-black w-full">
      <div className="container mx-auto px-4">
        <div className="relative isolate bg-gray-900 rounded-2xl overflow-hidden">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="p-8 md:p-12 max-w-[600px]">
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">Start investing in less than 5 minutes</h2>
            <p className="text-gray-400 mb-8">Have any questions? Call us on during 9am-5pm weekdays.</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="rounded-full">
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </Button>
              <Button variant="outline" className="rounded-full">
                <MessageSquare className="mr-2 h-4 w-4" />
                Live Chat
              </Button>
              <Link href="/register">
                <Button className="bg-blue-600 text-white hover:bg-blue-500/90 rounded-full">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="absolute animate-pulse size-72 -z-10 -right-10 -bottom-5 ">
            <Image
              src={earth}
              alt="Investment Illustration"
              width={400}
              height={300}
              className="object-cover opacity-65"
            />
          </div>
        </div>
      </div>
    </section>
  )
}



