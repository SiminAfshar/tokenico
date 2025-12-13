export default function getGirlImage(selected) {
    const { necklace, earrings, bracelet, ring, neckleswith } = selected;
  
    if (bracelet)
      return "/Images/model/modeling 1.webp";
  
    if (ring)
      return "/Images/model/modeling 2.webp";
    if (neckleswith)
        return "/Images/model/modeling 4.webp";
    
    if (necklace)
      return "/Images/model/modeling 3.webp";
  
    
    if (earrings)
      return "/Images/model/modeling 5.webp";
  
    return "/Images/model/modeling 6.webp";
  }
  
