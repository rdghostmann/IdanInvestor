"use client"

import { useState } from "react"
import { CryptoCard } from "../CryptoCard/CryptoCard"



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

export const CryptoList = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCryptos = cryptocurrencies.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Cryptocurrency List</h1>
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search cryptocurrencies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md mx-auto"
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCryptos.map((crypto) => (
          <CryptoCard key={crypto.id} crypto={crypto} />
        ))}
      </div>
      {filteredCryptos.length === 0 && <p className="text-center text-gray-500 mt-8">No cryptocurrencies found.</p>}
    </div>
  )
}

