import { useState, useEffect } from "react";

export default function useTypingLoop(
  text = "",
  typingSpeed = 80,
  deletingSpeed = 50,
  delay = 800
) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer;

    if (!isDeleting) {
      
      timer = setTimeout(() => {
        setDisplayText(text.slice(0, index + 1));
        setIndex(index + 1);
      }, typingSpeed);

      if (index === text.length) {
        
        setTimeout(() => setIsDeleting(true), delay);
      }
    } else {
      
      timer = setTimeout(() => {
        setDisplayText(text.slice(0, index - 1));
        setIndex(index - 1);
      }, deletingSpeed);

      if (index === 0) {
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, text, typingSpeed, deletingSpeed, delay]);

  return displayText;
}
