import React, { useEffect, useState } from "react";

export default function StarIcon({ coinId }) {
  //   console.log(coinId);
  const [like, setLike] = useState(false);

  const idChecker = (id) => {
    let favList = null;

    if (window.localStorage.coinList) {
      favList = window.localStorage.coinList.split(",");
    }
    if (favList) {
      if (favList.includes(id)) {
        window.localStorage.coinList = favList.filter((coin) => coin !== id);
        setLike(false);
      } else {
        window.localStorage.coinList = [...favList, coinId];
        setLike(true);
      }
    } else {
      window.localStorage.coinList = coinId;
      setLike(true);
    }
  };
  useEffect(() => {
    if (window.localStorage.coinList) {
      let favList = window.localStorage.coinList.split(",");
      if (favList.includes(coinId)) {
        setLike(true);
      }
    } else {
      setLike(false);
    }
  }, [coinId]);
  return (
    <img
      onClick={() => idChecker(coinId)}
      src={!like ? "./assets/star-empty.svg" : "./assets/star-full.svg"}
      alt="icon-star"
    />
  );
}
