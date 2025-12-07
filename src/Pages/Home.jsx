import { useState } from "react";
import useTypingLoop from "../hooks/typing";
import Game from "./Game";

export default function Home() {

  const [isStarted, setIsStarted] = useState(false);
  const typingText = useTypingLoop("سوتیکو محصول جدید توکنیکو", 80, 40, 700);

  return (
    <div className="container">

      {/* بخش ثابت که در هر دو صفحه باشد */}
      <div className="first-section">
        <div className="logo">
          <img src="/Images/new-logo2.png" />
        </div>
        {!isStarted && (
            <div className="neckles">
              <img className="neckles-anim" src="/Images/neckles.png" />
              <div>
              <span>طلاتو</span> انتخاب کن
              </div>
            </div>
            
        )}
        <div className="header">
            
            <p className="typing-text">{typingText}</p>
        </div>
      </div>

      {/* اگر بازی شروع نشده → صفحه قوانین */}
      {!isStarted && (
        <div className="second-section">
          <div className="part-one">
            

            <div className="rools">
              <h6>قوانین</h6>
              <ul>
                <li>بازی رو شروع کن و زیورآلات سوتیکو رو به ترتیب انتخاب کن</li>
                <li>عکس مدل رو کامل کن</li>
                <li>ثبت نام و احراز هویت انجام بده</li>
                <li>۲ سوت طلا جایزه بگیر</li>
                <li>هر نفر که بیاری بیشتر جایزه میگیری</li>
              </ul>
            </div>
          </div>

          <div className="part-two">
            <div className="button" onClick={() => setIsStarted(true)}>
              <img src="/perspective_dice_six_faces_three_removebg_تاس_بدون_بک.svg" />
              <p>شروع بازی</p>
            </div>
          </div>
        </div>
      )}

      {/* اگر بازی شروع شده → صفحه Game */}
      {isStarted && <Game />}
    </div>
  );
}
