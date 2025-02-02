"use client"
import React from 'react';
import { PlusCircle, PlusCircleIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"



export default function CardDetail() {
  const [cardNumber, setCardNumber] = useState("")

  // Format card number with spaces
  const formatCardNumber = () => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(" ")
    } else {
      return value
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-slate-900">Card Details</h1>
          <Button variant="outline" size="sm">
            <PlusCircleIcon className="mr-2 h-4 w-4" />
            Add A New Card
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Bank Card Preview */}
          <Card className="bg-gradient-to-br from-purple-600 to-purple-900 text-white">
            <CardContent className="p-6">
              <div className="space-y-8">
                <div className="flex justify-between">
                  <div className="text-sm">Balance</div>
                  <div className="font-mono text-sm">$2,254.75</div>
                </div>
                <div className="font-mono text-2xl tracking-wider">{cardNumber || "•••• •••• •••• ••••"}</div>
                <div className="flex justify-between">
                  <div>
                    <div className="text-xs opacity-75">Card Holder</div>
                    <div className="text-sm font-medium">JOHN DOE</div>
                  </div>
                  <div>
                    <div className="text-xs opacity-75">Expires</div>
                    <div className="text-sm font-medium">12/24</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card Details Form */}
          <Card>
            <CardHeader>
              <CardTitle>Add Card Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlhtmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  placeholder="0000 0000 0000 0000"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                  maxLength={19}
                />
              </div>
              <div className="space-y-2">
                <Label htmlhtmlFor="name">Card Holder Name</Label>
                <Input id="name" placeholder="Enter card holder name" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlhtmlFor="expiry">Expiry Date</Label>
                  <Select>
                    <SelectTrigger id="expiry">
                      <SelectValue placeholder="MM/YY" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12/23">12/23</SelectItem>
                      <SelectItem value="01/24">01/24</SelectItem>
                      <SelectItem value="02/24">02/24</SelectItem>
                      <SelectItem value="03/24">03/24</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlhtmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" maxLength={3} />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Save Card</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

