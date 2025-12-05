export default function getGirlImage(selected) {
    const { necklace, earrings, bracelet, ring, neckleswith } = selected;
  
    if (bracelet)
      return "/Images/model/modeling 1.jpg";
  
    if (ring)
      return "/Images/model/modeling 2.jpg";
    if (neckleswith)
        return "/Images/model/modeling 4.jpg";
    
    if (necklace)
      return "/Images/model/modeling 3.jpg";
  
    
    if (earrings)
      return "/Images/model/modeling 5.jpg";
  
    return "/Images/model/modeling 6.jpg";
  }
  
