import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Lock, CreditCard, ArrowRight, Vault } from "lucide-react"
import Image from "next/image"

export default function OurAmazingFeatures2() {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      title: "Fast & Simple",
      description: "Start investing in under 10 minutes",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-400" />,
      title: "Deep Encryption",
      description: "All data is encrypted to secure your passwords & personal data.",
      bgColor: "bg-indigo-500/10",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-blue-400" />,
      title: "Easy deposit & withdrawals",
      description: "Quickly add & withdraw funds to your bank account",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: <Vault className="w-8 h-8 text-blue-400" />,
      title: "Safe and Secure",
      description: "World class security features ensure your investment are safe",
      bgColor: "bg-blue-500/10",
    },

  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-950">
      {/* Background Gradients */}
      <div className="absolute inset-0 " />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.1),transparent_50%)]" />

      <div className="bg-gradient-to-br from-[#07071a] to-[#2c0323] relative px-5 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="inline-block text-blue-400 font-medium">Our Amazing Features</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Why Should You
              <br />
              Invest
            </h2>
            <p className="text-blue-100/80 max-w-lg">
              We are worldwide investment company who are committed to the principle of revenue maximization and
              reduction of the financial risks at investing.
            </p>
            <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white">
              Discover More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`${feature.bgColor} z-20 border-0 backdrop-blur-sm  `}
              >
                <CardContent className="p-6 space-y-4">
                  <div
                    className={`${feature.bgColor} w-16 h-16 rounded-full flex items-center justify-center bg-opacity-30`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-blue-100/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}

            {/* Decorative Image */}
            {/* <div className="absolute -right-20 bottom-0 hidden lg:block">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amazing-Features.PNG-NJG8g5ifzOYIMKY2ZB0KSr13yjQg7S.png"
                alt="Investment Illustration"
                width={300}
                height={300}
                className="object-contain"
              />
            </div> */}
          </div>
          
        </div>
      </div>
    </section>
  )
}

