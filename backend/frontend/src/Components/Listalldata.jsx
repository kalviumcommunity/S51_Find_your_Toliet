import React, { useEffect, useState } from 'react'
import axios  from "axios";
function Listalldata() {
    const [Data , setData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/getrecords')
        .then(res =>  setData(res.data))
        .catch(err => console.log(err));
    },[])
  return (
    <>
    <h1 className='heading_topic'>List of Toilets</h1>
      {Data.map((e, index) => (
        <div className='main_div_elements' key={index}>
          <div className='elements_div'>
            <p className='elemnts_heading'><strong>{e.Name}</strong></p>
            <p className='other_elemnts'>Type: {e.type}</p>
            <p className='other_elemnts'>{e.city}</p>
            <p className='other_elemnts'>Rating: {e.Rating}/5 </p>
          </div>
          <div className='map_div'>
            <iframe src={e.Location} width="100%" height="100%" frameBorder="0" allowFullScreen title={`Map ${index}`}></iframe>
          </div>  
        </div>
      ))}
    </>
  )
}

export default Listalldata