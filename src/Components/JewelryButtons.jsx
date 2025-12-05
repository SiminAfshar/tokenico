import { useRef } from "react";

export default function JewelryButtons({ step, stepsOrder, onMobileSelect }) {
  const items = [
    { type: "earrings", src: "/Images/icons/1-E.png" },
    { type: "necklace", src: "/Images/icons/ghalamdani.png" },
    { type: "neckleswith", src: "/Images/icons/1-N copy.png" },
    { type: "ring", src: "/Images/icons/1-R.png" },
    { type: "bracelet", src: "/Images/icons/1-B.png" },
  ];

  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
  const dragItem = useRef(null);

  return (
    <div className="buttons">
      {items.map((item) => {
        const active = stepsOrder[step] === item.type;

        return (
          <div key={item.type} className={`child ${!active ? "disabled" : ""}`}>
            <img
              src={item.src}
              draggable={!isMobile && active} // فقط دسکتاپ اجازه درگ دارد
              onClick={() => {
                if (isMobile && active) onMobileSelect(item.type);
              }}
              onDragStart={(e) => {
                if (isMobile || !active) return; // موبایل خروج
                e.dataTransfer.setData("type", item.type);
              }}
              style={{
                opacity: active ? 1 : 0.4,
                cursor: active
                  ? isMobile
                    ? "pointer"
                    : "grab"
                  : "not-allowed",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
