import { useEffect, useRef } from "react";

export default function WinModal({ visible }) {

  // 🔊 نگه‌داری فایل صدا
  const winSound = useRef(null);

  // فقط یک بار ساخته شود
  useEffect(() => {
    winSound.current = new Audio("/sounds/end.wav");
  }, []);

  // زمانی که modal باز می‌شود → صدا پخش شود
  useEffect(() => {
    if (visible && winSound.current) {
      winSound.current.currentTime = 0;
      winSound.current.play();
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="modal-bg">
      <div className="modal">
        <div className="border">
          <img src="/Images/the-girl.webp" alt="medal" className="medal-img" />
          <h2>تبریک !</h2>
          <h3>شماره برنده 2 سوت طلا شدید</h3>
          <a href="https://tokeniko.com/auth/sing-in" className="btn">
            ثبت نام و دریافت جایزه
            <img className="img" src="/Images/modal-icon.webp" />
          </a>
        </div>
      </div>
    </div>
  );
}
