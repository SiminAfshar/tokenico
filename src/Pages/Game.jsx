import { useState, useRef, useEffect } from "react";
import GirlImage from "../Components/GirlImage";
import JewelryButtons from "../Components/JewelryButtons";
import WinModal from "../Components/WinModal";
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
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
  const dragItem = useRef(null);

  const dingSound = useRef(null);
  const [firstLoad, setFirstLoad] = useState(true);  // ⬅️ اضافه شد

  useEffect(() => {
    dingSound.current = new Audio("/sounds/drag.wav");
  }, []);

  function handleSelect(type) {
    if (type !== stepsOrder[step]) return;

    // ⬅️ فقط وقتی انتخاب واقعی انجام شد، اجازه پخش صدا بده
    setFirstLoad(false);

    setSelectedJewelry((prev) => {
      const updated = { ...prev, [type]: true };

      if (step + 1 >= stepsOrder.length) {
        setTimeout(() => setShowWin(true), 500);
      } else {
        setStep(step + 1);
      }

      return updated;
    });
  }

  function handleDrop(type) {
    if (!isMobile) handleSelect(type);
  }

  function handleTouchEnd(e) {
    if (!isMobile) return;

    const touch = e.changedTouches[0];
    const dropArea = e.currentTarget.getBoundingClientRect();

    const inside =
      touch.clientX >= dropArea.left &&
      touch.clientX <= dropArea.right &&
      touch.clientY >= dropArea.top &&
      touch.clientY <= dropArea.bottom;

    if (inside && dragItem.current) {
      handleSelect(dragItem.current);
      dragItem.current = null;
    }
  }

  const imageName = getGirlImage(selectedJewelry);

  // 🎵 فقط بعد از اولین انتخاب صدا پخش می‌شود
  useEffect(() => {
    if (firstLoad) return; // اولین بار = صدا پخش نکن

    if (dingSound.current) {
      dingSound.current.currentTime = 0;
      dingSound.current.play();
    }
  }, [imageName]);

  return (
    <div className="game-page">
      <h6>
        {isMobile
          ? " روی زیورآلات کلیک کنید"
          : " زیورآلات را روی تصویر درگ کنید"}
      </h6>

      <div className="containerBox">
        <div
          className="drop-area"
          onDrop={(e) => {
            if (!isMobile) {
              const type = e.dataTransfer.getData("type");
              handleDrop(type);
            }
          }}
          onDragOver={(e) => !isMobile && e.preventDefault()}
          onTouchEnd={handleTouchEnd}
        >
          <GirlImage src={imageName} />
        </div>

        <JewelryButtons
          step={step}
          stepsOrder={stepsOrder}
          dragItem={dragItem}
          onMobileSelect={isMobile ? handleSelect : null}
        />

        <WinModal visible={showWin} />
      </div>
    </div>
  );
}
