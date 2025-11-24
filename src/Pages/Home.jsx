import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return(
        <div className="container">
            <div className="first-section">
                <div className="logo">
                    <img src="/Images/logo.png"/>
                </div>
                <div className="neckles">
                    <img src="/Images/neckles.png" />
                </div>
            </div>
            <div className="second-section">
                <div className="part-one">
                    <div className="header">
                        <span>طلاتو</span>انتخاب کن
                    </div>
                    <div className="rools">
                        <h6>قوانین</h6>
                        <ul>
                            <li>
                                بازی رو شروع کن و زیورآلات سوتیکو رو به ترتیب انتخاب کن
                            </li>
                            <li>
                                عکس مدل رو کامل کن
                            </li>
                            <li>
                                ثبت نام و احراز هویت انجام بده
                            </li>
                            <li>
                                2سوت طلا جایزه بگیر
                            </li>
                            <li>
                                هر نفر که بیاری به بازی بیشتر جایزه می گیری
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="part-two">
                    <div className="button">
                        <i></i>
                        <p>شروع بازی</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}