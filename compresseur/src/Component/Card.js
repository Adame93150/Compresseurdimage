import React from 'react';
import axios from 'axios';



const CardX = () => {
  
  const getImage = async () => {
    try {
        const response = await axios.get(`"http://localhost:8001/images/"`)

        return response.data
    } catch (error) {
        console.error(error)
        return false
    }
}
    return (
        
<div class="placementimage">
  
    <img
      src="https://fr.web.img6.acsta.net/c_310_420/pictures/210/038/21003859_20130507110423451.jpg"
    />

    <img
      src="https://fr.web.img3.acsta.net/c_310_420/pictures/21/05/18/10/40/2487837.jpg"
    />
    
  
  
  <img
      src="https://fr.web.img3.acsta.net/c_310_420/pictures/21/05/18/10/40/2487837.jpg"
    />
     
  
  
</div>

      );
};

export default CardX;