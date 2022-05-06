import React from "react";

export default function ToTop() {
  return (
    <div className="top" onClick={() => window.scrollTo(0, 0)}>
      <img src="./assets/arrow-icon.svg" alt="arrow" />
    </div>
  );
}
