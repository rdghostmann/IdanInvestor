"use client";
import React from "react";

const CoinPriceMarqueeWidget = () => {
  return (
    <div className="max-w-full overflow-x-hidden">
      <script src="https://widgets.coingecko.com/gecko-coin-price-marquee-widget.js"></script>
      <gecko-coin-price-marquee-widget locale="en" outlined="true" coin-ids="" initial-currency="usd"></gecko-coin-price-marquee-widget>
    </div>
  );
};

export default CoinPriceMarqueeWidget;
