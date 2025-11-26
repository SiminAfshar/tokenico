import { useState } from "react";
import GirlImage from "../components/GirlImage";
import JewelryButtons from "../components/JewelryButtons";
import WinModal from "../components/WinModal";
import getGirlImage from "../utils/getGirlImage";

export default function Game() {
  const [selectedJewelry, setSelectedJewelry] = useState({
    earrings: false,
    necklace: false,
    neckleswith: false,
    ring: false,
    bracelet: false,
  });

  const [step, setStep] = useState(0);
  const [showWin, setShowWin] = useState(false);

  const stepsOrder = ["earrings", "necklace", "neckleswith", "ring", "bracelet"];

  function handleDrop(type) {
    if (type !== stepsOrder[step]) return;

    setSelectedJewelry((prev) => {
      const updated = { ...prev, [type]: true };
      const nextStep = step + 1;
      if (nextStep >= stepsOrder.length) setTimeout(() => setShowWin(true), 500);
      else setStep(nextStep);
      return updated;
    });
  }

  const imageName = getGirlImage(selectedJewelry);

  // Touch handlers
  function handleTouchEnd(e) {
    const touch = e.changedTouches[0];
    const dropArea = e.currentTarget.getBoundingClientRect();
    if (
      touch.clientX >= dropArea.left &&
      touch.clientX <= dropArea.right &&
      touch.clientY >= dropArea.top &&
      touch.clientY <= dropArea.bottom
    ) {
      if (dragItem.current) {
        handleDrop(dragItem.current);
        dragItem.current = null;
      }
    }
  }

  const dragItem = { current: null }; // shared ref for touch

  return (
    <div className="game-page">
        <h6>جواهرات را چسبیده و روی تصاویر قرار دهید</h6>
      <div className="containerBox">
        <div
          className="drop-area"
          onDrop={(e) => {
            const type = e.dataTransfer.getData("type");
            handleDrop(type);
          }}
          onDragOver={(e) => e.preventDefault()}
          onTouchEnd={handleTouchEnd}
        >
          <GirlImage src={imageName} />
        </div>

        <JewelryButtons step={step} stepsOrder={stepsOrder} dragItem={dragItem} />

        <WinModal visible={showWin} />
      </div>
    </div>
  );
}
