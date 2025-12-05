export default function GirlImage({ src , flashPart }) {
    return (
      <div className="girl-wrapper">
        <img src={src} className="girl-image" />

        {flashPart && (
          <div className={`flash-effect flash-${flashPart}`}></div>
        )}
      </div>
    );
  }
  