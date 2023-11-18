"use client";
import { useState } from "react";
import Box from "./components/Box";
import boxData from "./Data";

export default function Home() {
  const [squares, setSquares] = useState(boxData);

  const toggle = (id: number) => {
    setSquares((prevSquare) => {
      return prevSquare.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  };

  const allBoxes = squares.map((box) => {
    return <Box key={box.id} {...box} toggle={toggle} />;
  });
  return (
    <div className="flex flex-wrap items-center justify-center w-screen h-screen gap-2">
      {allBoxes}
    </div>
  );
}
