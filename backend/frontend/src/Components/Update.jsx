import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
    const {id} = useParams()

    const [formData, setFormData] = useState({
        ID: '',
        Name: '',
        type: '',
        city: '',
        Location: '',
        Rating: ''
      });
      const navigate = useNavigate();

      useEffect(()=>{
        axios.get('http://localhost:3000/getrecords'+id)
        .then(res =>  setFormData(res.data))
        .catch(err => console.log(err));
    },[])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };


      const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3000/createrecords/'+id, formData)
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
    <div><div>
    <h2>Add Data</h2>
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="text" name="ID" value={formData.ID} onChange={handleChange}  value={formData.ID} />
      </label><br />
      <label>
        Name:
        <input type="text" name="Name" value={formData.Name} onChange={handleChange} value={formData.name} />
      </label><br />
      <label>
        Type:
        <input type="text" name="type" value={formData.type} onChange={handleChange} value={formData.type} />
      </label><br />
      <label>
        City:
        <input type="text" name="city" value={formData.city} onChange={handleChange} value={formData.city} />
      </label><br />
      <label>
        Location:
        <input type="text" name="Location" value={formData.Location} onChange={handleChange}  value={formData.Location}/>
      </label><br />
      <label>
        Rating:
        <input type="text" name="Rating" value={formData.Rating} onChange={handleChange} value={formData.Rating}  />
      </label><br />
      <button type="submit">Update</button>
    </form>
  </div></div>
  )
}

export default Update