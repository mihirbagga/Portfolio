import { useState } from "react";
import "./App.css";

export default function StarRating() {
  const [selectedId, setSelectedId] = useState(-1);

  const handleCLick = (selectedid) => {
    setSelectedId(selectedid);
  };
  return (
    <div className="rate">
      {Array(5)
        .fill()
        .map((_, index) => (
          <div
            key={index}
            id={index}
            className={`star ${
              selectedId >= index ? "selected-star-color" : "star-color"
            }`}
            onClick={() => handleCLick(index)}
          />
        ))}
    </div>
  );
}

