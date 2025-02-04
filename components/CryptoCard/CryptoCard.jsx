import Image from "next/image"
import { useState } from "react"

export const CryptoCard = ({ crypto }) => {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="rounded-lg shadow-md p-4 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative w-16 h-16 mx-auto">
        {!imageError ? (
          <Image
            src={crypto.path || "/placeholder.svg"}
            alt={crypto.alt}
            layout="fill"
            objectFit="contain"
            className="rounded-full"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-xs">Image not available</span>
          </div>
        )}
      </div>
      <h4 className="text-center mt-2 text-lg font-semibold">{crypto.name}</h4>
    </div>
  )
}

