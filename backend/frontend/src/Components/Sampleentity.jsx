import React from 'react';
import Data from '../Data';
import '../styles/sample.css'

function Sampleentity() {
  return (
    <>
    <h1 className='heading_topic'>List of Toilets</h1>
      {Data.map((e, index) => (
        <div className='main_div_elements' key={index}>
          <div className='elements_div'>
            <p className='elemnts_heading'><strong>{e.name}</strong></p>
            <p className='other_elemnts'>Type: {e.type}</p>
            <p className='other_elemnts'>{e.location}</p>
            <p className='other_elemnts'>Rating: {e.rating}/5 </p>
          </div>
          <div className='map_div'>
            <iframe src={e.map_src} width="100%" height="100%" frameBorder="0" allowFullScreen title={`Map ${index}`}></iframe>
          </div>  
        </div>
      ))}
    </>
  );
}

export default Sampleentity;
