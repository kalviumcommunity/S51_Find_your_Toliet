import React from 'react'


function Dummy() {
    const Data = 
        {
          "name": "Sravana stores restroom",
          "type": "paid",
          "location": "chromepet",
          "map_src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.25028389491!2d80.14073907441225!3d12.95583001522512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e4ccf1b3981%3A0x26be7a6171ea21ab!2sSuper%20Saravana%20Stores%20-%20Chrompet!5e0!3m2!1sen!2sin!4v1708322114123!5m2!1sen!2sin",
          "rating": 3
        }
  return (
    <div className='main_div_elements'>
          <div className='elements_div'>
            <p className='elemnts_heading'><strong>{Data.name}</strong></p>
            <p className='other_elemnts'>Type: {Data.type}</p>
            <p className='other_elemnts'>{Data.location}</p>
            <p className='other_elemnts'>Rating: {Data.rating}/5 </p>
          </div>
          <div className='map_div'>
            <iframe src={Data.map_src} width="100%" height="100%" frameBorder="0" allowFullScreen title={`Map ${1}`}></iframe>
          </div>  
        </div>
  )
}

export default Dummy