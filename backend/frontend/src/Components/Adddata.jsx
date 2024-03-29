import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Form.css'

function AddData() {
  const [formData, setFormData] = useState({
    ID: '',
    Name: '',
    type: '',
    city: '',
    Location: '',
    Rating: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/createrecords', formData)
      .then((response) => {
        console.log('Data successfully added:', response.data);
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
        console.error('Error adding data:', error);
      });
  };

  return (
    <div className='main_div_update1'><div className='main_div_update'>
    <h2>Add Data</h2>
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
      <button type="submit">Submit</button>
    </form>
  </div></div>
  );
}

export default AddData;
