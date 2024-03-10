import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
    const { id } = useParams();

    const [formData, setFormData] = useState({
        ID: '',
        Name: '',
        type: '',
        city: '',
        Location: '',
        Rating: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/getrecords/${id}`) // Corrected URL
            .then(res => setFormData(res.data))
            .catch(err => console.log(err));
    }, [id]); // Include id in dependency array to fetch data when id changes

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/getrecords/${id}`, formData) // Corrected URL
            .then((response) => {
                console.log('Data successfully updated:', response.data);
                setFormData({
                    ID: '',
                    Name: '',
                    type: '',
                    city: '',
                    Location: '',
                    Rating: ''
                });
                navigate('/');
            })
            .catch((error) => {
                console.error('Error updating data:', error);
            });
    };
  return (
    <div className='main_div_update1'><div className='main_div_update'>
    <h2>Edit Data</h2>
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="text" name="ID" value={formData.ID} onChange={handleChange}   />
      </label><br />
      <label>
        Name:
        <input type="text" name="Name" value={formData.Name} onChange={handleChange}  />
      </label><br />
      <label>
        Type:
        <input type="text" name="type" value={formData.type} onChange={handleChange}  />
      </label><br />
      <label>
        City:
        <input type="text" name="city" value={formData.city} onChange={handleChange}  />
      </label><br />
      <label>
        Location:
        <input type="text" name="Location" value={formData.Location} onChange={handleChange} />
      </label><br />
      <label>
        Rating:
        <input type="text" name="Rating" value={formData.Rating} onChange={handleChange}   />
      </label><br />
      <button type="submit">Update</button>
    </form>
  </div></div>
  )
}

export default Update