import { useState, useRef, useEffect } from "react";
import GirlImage from "../Components/GirlImage";
import JewelryPopup from "../components/JewelryPopup";
import JewelryButtons from "../Components/JewelryButtons";
import WinModal from "../Components/WinModal";
import getGirlImage from "../Utils/getGirlImage";


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
  const [openPopup, setOpenPopup] = useState(null); 

  const stepsOrder = ["earrings", "necklace", "neckleswith", "ring", "bracelet"];

  const dingSound = useRef(null);
  const [firstLoad, setFirstLoad] = useState(true);
  const [flashPart, setFlashPart] = useState(null);

  useEffect(() => {
    dingSound.current = new Audio("/sounds/drag.wav");
  }, []);

  function confirmSelect(type) {

    setOpenPopup(null);

    if (type !== stepsOrder[step]) return;

    setFirstLoad(false);

    setFlashPart(type);
    setTimeout(() => setFlashPart(null), 300);

    setSelectedJewelry(prev => {
      const updated = { ...prev, [type]: true };

      if (step + 1 >= stepsOrder.length) {
        setTimeout(() => setShowWin(true), 1000);
      } else {
        setStep(step + 1);
      }

      return updated;
    });
  }

  const imageName = getGirlImage(selectedJewelry);

  useEffect(() => {
    if (firstLoad) return;
    if (dingSound.current) {
      dingSound.current.currentTime = 0;
      dingSound.current.play();
    }
  }, [imageName]);

  return (
    <div className="game-page">
      <h6> روی زیورآلات کلیک کنید </h6>

      <div className="containerBox">

        <div className="drop-area">
          <GirlImage src={imageName} flashPart={flashPart} />
        </div>

        <JewelryButtons
          step={step}
          stepsOrder={stepsOrder}
          onClickItem={(type) => setOpenPopup(type)}
        />

        <WinModal visible={showWin} />

        {openPopup && (
          <JewelryPopup
            type={openPopup}
            onClose={() => setOpenPopup(null)}
            onSelect={() => confirmSelect(openPopup)}
          />
        )}

      </div>
    </div>
  );
}
