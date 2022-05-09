import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setStableState } from "../actions/stable.action";
import { setListDisplay } from "../actions/list.action";

export default function TableFilters() {
  const [showStable, setShowStable] = useState(true);
  const [showFavList, setShowFavList] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStableState(showStable));
    dispatch(setListDisplay(showFavList));
  }, [showStable, dispatch, showFavList]);

  // const toggleCheckbox = () => {
  //   setShowStable(!showStable);
  // };
  return (
    <div className="table-filters">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          <input
            type="checkbox"
            id="stableCoin"
            defaultChecked={true}
            onChange={() => {
              setShowStable(!showStable);
            }}
          />
          <label htmlFor="stableCoin">
            {showStable ? "Avec stable coin" : "Sans stable coin"}
          </label>
        </div>
        <div
          className={showFavList ? "no-list-btn" : "no-list-btn active"}
          onClick={() => {
            setShowFavList(false);
          }}
        >
          <p>Aucune liste</p>
        </div>
        <div
          className={showFavList ? "fav-list active" : "fav-list"}
          onClick={() => {
            setShowFavList(true);
          }}
        >
          <p>Liste des Favoris</p>
          <img src="./assets/star-full.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
