import { ArrowUpRight } from "lucide-react"

const tokens = [
  {
    id: "1",
    name: "Ethereum",
    symbol: "ETH",
    price: "$2,551",
    change: "+0.25%",
    iconColor: "bg-indigo-100",
  },
  {
    id: "2",
    name: "Original Protocol",
    symbol: "OGN",
    price: "$1,824",
    change: "+1.25%",
    iconColor: "bg-blue-100",
  },
  {
    id: "3",
    name: "Dogecoin",
    symbol: "DOGE",
    price: "$0.255",
    change: "+2.25%",
    iconColor: "bg-yellow-100",
  },
  {
    id: "4",
    name: "Digibyte",
    symbol: "DGB",
    price: "$0.158",
    change: "+0.75%",
    iconColor: "bg-purple-100",
  },
  {
    id: "5",
    name: "Digibyte",
    symbol: "DGB",
    price: "$0.158",
    change: "+0.75%",
    iconColor: "bg-purple-100",
  },
  {
    id: "6",
    name: "Digibyte",
    symbol: "DGB",
    price: "$0.158",
    change: "+0.75%",
    iconColor: "bg-purple-100",
  },
  {
    id: "7",
    name: "Digibyte",
    symbol: "DGB",
    price: "$0.158",
    change: "+0.75%",
    iconColor: "bg-purple-100",
  },
]

export default function Watchlist() {
  return (
    <div className="bg-white">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-medium">My Watchlist</h3>
        <button className="text-sm text-indigo-600 hover:text-indigo-700">See all</button>
      </div>

      {/* Fixed height container with overflow */}
      <div className="h-[320px] overflow-y-auto pr-2">
        <div className="space-y-4">
          {tokens.map((token) => (
            <div key={token.id} className="flex items-center justify-between rounded-lg p-2 hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className={`h-10 w-10 rounded-full ${token.iconColor}`} />
                <div>
                  <p className="font-medium">{token.name}</p>
                  <p className="text-sm text-gray-500">{token.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">{token.price}</p>
                <p className="flex items-center text-sm text-green-500">
                  <ArrowUpRight className="h-3 w-3" />
                  {token.change}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

