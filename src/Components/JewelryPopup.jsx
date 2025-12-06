// JewelryPopup.jsx
export default function JewelryPopup({ type, onSelect }) {
    if (!type) return null;
  
    // آدرس تصاویر جواهرات
    const jewelryImages = {
      earrings: "/Images/icons/1-E.png",
      necklace: "/Images/icons/ghalamdani.png",
      neckleswith: "/Images/icons/1-N copy.png",
      ring: "/Images/icons/1-R.png",
      bracelet: "/Images/icons/1-B.png",
    };
  
    // اسم هر جواهر
    const jewelryNames = {
      earrings: " گوشواره سوتیکو",
      necklace: "زنجیر سوتیکو ",
      neckleswith: "پلاک سوتیکو ",
      ring: "انگشتر سوتیکو",
      bracelet: "دستبند سوتیکو",
    };
  
    return (
      <div className="popup-backdrop">
        <div className="popup-box" onClick={() => onSelect(type)}>
          <div className="jewelry-preview">
            <img src={jewelryImages[type]} alt={type} />
          </div>
          <div className="jewelry-name">{jewelryNames[type]}</div>
        </div>
      </div>
    );
  }
  