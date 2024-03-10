import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/sample.css';

function Listalldata() {
    const [Data, setData] = useState([]);
    const [filterType, setFilterType] = useState(''); // State to store filter type

    useEffect(() => {
        axios.get('https://find-your-toliet.onrender.com/getrecords')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    // Function to filter data based on type
    const filterData = (type) => {
        setFilterType(type);
    };

    // Function to clear filter
    const clearFilter = () => {
        setFilterType('');
    };
    const handleDelete = (id) => {
      axios.delete(`http://localhost:3000/delete/${id}`) // Use backticks for dynamic URL
          .then(res => {
              console.log(res.data);
              window.location.reload();
          })
          .catch(err => console.log(err));
  };
  
  

    return (
        <>
            {/* Navigation bar */}
            <nav >
                <div className="nav-left">
                    <div className="dropdown">
                        <button className="dropbtn">Sort by Type</button>
                        <div className="dropdown-content">
                            <button onClick={() => filterData('free')}>Free</button>
                            <button onClick={() => filterData('paid')}>Paid</button>
                        </div>
                    </div>
                    <h1>Find Your Toilet</h1>

                </div>
                <div className="nav-right">
                    <ul>
                        <li><a href='https://github.com/jayavarsan-r'>About me</a></li>
                        <li><Link to='/sign'>signup/login</Link></li>
                    </ul>
                </div>
            </nav>
            <div className='nav_bar'></div>
            {/* Display toilets */}
            <div className='all_div'>
              {Data.filter(item => !filterType || item.type === filterType).map((e, index) => (
                  <div className='main_div_elements' key={index}>
                      <div className='elements_div'>
                          <p className='elemnts_heading'><strong>{e.Name}</strong></p>
                          <p className='other_elemnts'>Type: {e.type}</p>
                          <p className='other_elemnts'>{e.city}</p>
                          <p className='other_elemnts'>Rating: {e.Rating}/5 </p>
                          <div className='link_buttons'>
                              <Link className='link' to={`/edit/${e._id}`} >Update/edit</Link>
                              <Link onClick={(res) => handleDelete(e._id)} className='link delete'>Delete</Link>
                              
                          </div>
                      </div>
                      <div className='map_div'>
                          <iframe src={e.Location} width="100%" height="100%" frameBorder="0" allowFullScreen title={`Map ${index}`}></iframe>
                      </div>
                  </div>
              ))}
            </div>
            <Link className='link add_button' to={'/update'}>Add More Toilets</Link>
        </>
    )
}

export default Listalldata;
