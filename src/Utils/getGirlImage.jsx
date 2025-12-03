export default function getGirlImage(selected) {
    const { necklace, earrings, bracelet, ring, neckleswith } = selected;
  
    if (bracelet)
      return "/images/model/modeling 1.jpg";
  
    if (ring)
      return "/images/model/modeling 2.jpg";
    if (neckleswith)
        return "/images/model/modeling 4.jpg";
    
    if (necklace)
      return "/images/model/modeling 3.jpg";
  
    
    if (earrings)
      return "/images/model/modeling 5.jpg";
  
    return "/images/model/modeling 6.jpg";
  }
  
