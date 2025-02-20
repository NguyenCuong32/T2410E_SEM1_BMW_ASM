import React from 'react';
import '../style/card_img.css'
function Img_card({sources, alt})
 {
    return <img src={sources} alt={alt} className='card_img' />;
}
export default Img_card;