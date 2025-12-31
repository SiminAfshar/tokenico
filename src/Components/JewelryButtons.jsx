export default function JewelryButtons({ step, stepsOrder, onClickItem }) {

  const items = [
    { type: "earrings", src: "/Images/icons/1-E.webp" },
    { type: "necklace", src: "/Images/icons/ghalamdani.webp" },
    { type: "neckleswith", src: "/Images/icons/1-N copy.webp" },
    { type: "ring", src: "/Images/icons/1-R.webp" },
    { type: "bracelet", src: "/Images/icons/1-B.webp" },
  ];

  return (
    <div className="buttons">
      {items.map(item => {
        const active = stepsOrder[step] === item.type;

        return (
          <div key={item.type} className={`child ${!active ? "disabled" : ""}`}>
            <img
              src={item.src}
              onClick={() => active && onClickItem(item.type)}
              style={{
                opacity: active ? 1 : 0.4,
                cursor: active ? "pointer" : "not-allowed"
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
