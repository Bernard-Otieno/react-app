import React, { useEffect, useState } from 'react';

const EasterEgg = () => {
  const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  const [konamiCodeIndex, setKonamiCodeIndex] = useState(0);

  const handleKeyDown = (event) => {
    if (event.key === konamiCode[konamiCodeIndex]) {
      setKonamiCodeIndex((prevIndex) => prevIndex + 1);

      if (konamiCodeIndex === konamiCode.length - 1) {
        activateEasterEgg();
        setKonamiCodeIndex(0); // Reset the index after the Easter egg is activated
      }
    } else {
      setKonamiCodeIndex(0);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [konamiCodeIndex]);

  const activateEasterEgg = () => {
    alert("Congratulations! You found the Easter egg! (Konami code). I'm also a gamer :)");
  };

  return <></>; // The component doesn't render anything visible
};

export default EasterEgg;
