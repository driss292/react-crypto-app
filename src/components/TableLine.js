import React from "react";

export default function TableLine({ coin, index }) {
  const priceFormater = (num) => {
    if (Math.round(num).toString().length < 4) {
      return new Intl.NumberFormat("us-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 7,
      }).format(num);
    } else {
      return num;
    }
  };

  const mktCapFormater = (num) => {
    let newNum = String(num).split("").slice(0, -6).join("");
    // let newNum = JSON.stringify(num).split("").slice(0, -6).join("");
    return Number(newNum);
    // return JSON.parse(newNum);
  };
  return (
    <div className="table-line">
      <div className="infos-container">
        <span>🥐</span>
        <p>{index + 1}</p>
        <div className="img">
          <img src={coin.image} height="20" alt="logo" />
        </div>
        <div className="infos">
          <div className="chart-img">
            <img src="./assets/chart-icon.svg" alt="chart-icon" />
          </div>
          <h4>{coin.name}</h4>
          <span>- {coin.symbol.toUpperCase()}</span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.coingecko.com/fr/pi%C3%A8ces/${coin.name
              .toLowerCase()
              .replace(" ", "-")
              .replace(" ", "-")
              .replace(" ", "-")}`}
          >
            <img src="./assets/info-icon.svg" alt="info-icon" />
          </a>
        </div>
      </div>
      <p>{priceFormater(coin.current_price).toLocaleString()} $</p>
      <p className="mkt-cap">
        {mktCapFormater(coin.market_cap).toLocaleString()} M$
      </p>
    </div>
  );
}
