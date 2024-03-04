import { Board, Led, render } from "edison";
import React, { useState } from "react";
const LedRun: React.FC = () => {
  const [isOn, setIsOn] = useState(true);

  setTimeout(() => {
    setIsOn(!isOn);
  }, 1000);

  return (
    <Board port={"/dev/ttyUSB0"}>
      <Led pin={13} isOn={isOn} />
    </Board>
  );
};
render(<LedRun />);
