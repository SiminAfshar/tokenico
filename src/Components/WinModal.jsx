export default function WinModal({ visible }) {
    if (!visible) return null;
  
    return (
      <div className="modal-bg">
        <div className="modal">
          <div className="border">
            <img src="/Images/the-girl.png" alt="medal" className="medal-img" />
            <h2>🎉 تبریک شما برنده 2 سوت 
            طلا شدید 🎉</h2>
            <p>ثبت نام و دریافت جایزه</p>
            <a href="https://tokeniko.com/auth/sing-in" className="btn"> دریافت جایزه </a>
          </div>
        </div>
      </div>
    );
  }
  