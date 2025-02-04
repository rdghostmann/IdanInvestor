"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"


const cryptocurrencies = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    path: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg",
    alt: "Bitcoin (BTC) Logo",
  },
  {
    id: "ethereum",
    name: "Ethereum",
    path: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
    alt: "Ethereum (ETH) Logo",
  },
  {
    id: "solana",
    name: "Solana",
    path: "https://cryptologos.cc/logos/solana-sol-logo.svg",
    alt: "Solana (SOL) Logo",
  },
  {
    id: "stellar",
    name: "Stellar",
    path: "https://cryptologos.cc/logos/stellar-xlm-logo.svg",
    alt: "Stellar (XLM) Logo",
  },
  {
    id: "ontology",
    name: "Ontology",
    path: "https://cryptologos.cc/logos/ontology-ont-logo.svg",
    alt: "Ontology (ONT) Logo",
  },
  {
    id: "xrp",
    name: "XRP",
    path: "https://cryptologos.cc/logos/xrp-xrp-logo.svg",
    alt: "XRP (XRP) Logo",
  },
  {
    id: "decentraland",
    name: "Decentraland",
    path: "https://cryptologos.cc/logos/decentraland-mana-logo.svg",
    alt: "Decentraland (MANA) Logo",
  },
  {
    id: "dash",
    name: "Dash",
    path: "https://cryptologos.cc/logos/dash-dash-logo.svg",
    alt: "Dash (DASH) Logo",
  },
  {
    id: "eos",
    name: "EOS",
    path: "https://cryptologos.cc/logos/eos-eos-logo.svg",
    alt: "EOS (EOS) Logo",
  },
  {
    id: "axie-infinity",
    name: "Axie Infinity",
    path: "https://cryptologos.cc/logos/axie-infinity-axs-logo.svg",
    alt: "Axie Infinity (AXS) Logo",
  },
  {
    id: "terra-classic",
    name: "Terra Classic",
    path: "https://cryptologos.cc/logos/terra-classic-lunc-logo.svg",
    alt: "Terra Classic (LUNC) Logo",
  },
  {
    id: "harmony",
    name: "Harmony",
    path: "https://cryptologos.cc/logos/harmony-one-logo.svg",
    alt: "Harmony (ONE) Logo",
  },
]

const CryptoCard = ({ crypto, onClick }) => (
  <div
    className="rounded-lg shadow-md p-4 bg-white cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    onClick={onClick}
  >
    <div className="relative w-16 h-16 mx-auto">
      <Image
        src={crypto.path || "/placeholder.svg"}
        alt={crypto.alt}
        layout="fill"
        objectFit="contain"
        className="rounded-full"
      />
    </div>
    <h4 className="text-center mt-2 text-lg font-semibold">{crypto.name}</h4>
  </div>
)

const AssetCard = ({ asset, onConnect }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative rounded-lg shadow-md p-4 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-16 h-16 mx-auto">
        <Image
          src={asset.path || "/placeholder.svg"}
          alt={asset.alt}
          layout="fill"
          objectFit="contain"
          className="rounded-full"
        />
      </div>
      <h4 className="text-center mt-2 text-lg font-semibold">{asset.name}</h4>
      <p className="text-center text-sm text-gray-500 truncate">{asset.address}</p>
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <Button onClick={onConnect} className="rounded-full text-white bg-gradient-to-br from-blue-600 to-indigo-600">
            Connect
          </Button>
        </div>
      )}
    </div>
  )
}

export const ManageWallet = () => {
  const [selectedCrypto, setSelectedCrypto] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [myAssets, setMyAssets] = useState([])
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleCryptoClick = (crypto) => {
    setSelectedCrypto(crypto)
    setIsModalOpen(true)
  }

  const handleAddAsset = () => {
    if (selectedCrypto && walletAddress) {
      setMyAssets([...myAssets, { ...selectedCrypto, address: walletAddress }])
      setIsModalOpen(false)
      setWalletAddress("")
    }
  }

  const handleConnect = (asset) => {
    setSelectedCrypto(asset)
    setIsLoading(true)
    setIsConnectModalOpen(true)
  }

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  return (
    <div className="container mx-auto px-4 py-8">
      <h4 className="text-2xl font-bold mb-6">Add Asset</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {cryptocurrencies.map((crypto) => (
          <CryptoCard key={crypto.id} crypto={crypto} onClick={() => handleCryptoClick(crypto)} />
        ))}
      </div>

      <h4 className="text-2xl font-bold my-6">My Assets</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {myAssets.map((asset) => (
          <AssetCard key={asset.id} asset={asset} onConnect={() => handleConnect(asset)} />
        ))}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Asset</DialogTitle>
          </DialogHeader>
          {selectedCrypto && (
            <div className="grid gap-4 py-4">
              <div className="flex items-center justify-center">
                <div className="relative w-24 h-24">
                  <Image
                    src={selectedCrypto.path || "/placeholder.svg"}
                    alt={selectedCrypto.alt}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="network" className="text-right">
                  Network
                </Label>
                <Input id="network" value={selectedCrypto.name} className="col-span-3" readOnly />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="wallet" className="text-right">
                  Wallet Address
                </Label>
                <Input
                  id="wallet"
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  className="col-span-3"
                />
              </div>
            </div>
          )}
          <Button onClick={handleAddAsset}>Add Asset</Button>
        </DialogContent>
      </Dialog>

      <Dialog open={isConnectModalOpen} onOpenChange={setIsConnectModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : (
            selectedCrypto && (
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src={selectedCrypto.path || "/placeholder.svg"}
                        alt={selectedCrypto.alt}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-full"
                      />
                    </div>
                    <CardTitle>{selectedCrypto.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="recovery">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="recovery">Recovery Phrase</TabsTrigger>
                      <TabsTrigger value="connect">Connect</TabsTrigger>
                    </TabsList>
                    <TabsContent value="recovery">
                      <Textarea placeholder="Enter your recovery phrase" className="min-h-[100px]" />
                    </TabsContent>
                    <TabsContent value="connect">
                      <div className="flex justify-center">
                        <Image src="/placeholder.svg" alt="QR Code" width={200} height={200} className="rounded-lg" />
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            )
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

