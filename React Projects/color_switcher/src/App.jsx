import React, { useState } from "react";
import Button from "./utilities/Button";
import Buttons from "./components/Buttons";
import ColorBox from "./components/ColorBox";

function App() {
  const [selectedColors, setSelectedColors] = useState("transparent");

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-4 py-12 sm:py-15">
      <h1 className="text-3xl sm:text-4xl font-medium text-white/90">
        🎨 Color Switcher
      </h1>

      <Buttons setSelectedColors={setSelectedColors} />

      <ColorBox selectedColors={selectedColors} />

      <Button color="black" func={() => setSelectedColors("transparent")}>
        Reset Color
      </Button>
    </div>
  );
}

export default App;
