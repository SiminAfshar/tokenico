import { useRef } from "react";

export default function JewelryButtons({ step, stepsOrder }) {
  const items = [
    { type: "earrings", src: "/Images/icons/1-E.png" },
    { type: "necklace", src: "/Images/icons/ghalamdani.png" },
    { type: "neckleswith", src: "/Images/icons/1-N copy.png" },
    { type: "ring", src: "/Images/icons/1-R.png" },
    { type: "bracelet", src: "/Images/icons/1-B.png" },
  ];

  const dragItem = useRef(null);

  return (
    <div className="buttons">
      {items.map((item) => {
        const active = stepsOrder[step] === item.type;

        return (
          <div key={item.type} className={`child ${!active ? "disabled" : ""}`}>
            <img
              src={item.src}
              draggable={active}
              style={{
                opacity: active ? 1 : 0.4,
                cursor: active ? "grab" : "not-allowed",
              }}
              onDragStart={(e) => {
                if (!active) return;
                e.dataTransfer.setData("type", item.type);
              }}
              onTouchStart={(e) => {
                if (!active) return;
                dragItem.current = item.type;
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
