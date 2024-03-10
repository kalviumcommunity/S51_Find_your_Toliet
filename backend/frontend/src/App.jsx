import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddData from './Components/Adddata';
import Listalldata from './Components/Listalldata';
import Sampleentity from './Components/Sampleentity'
import Update from './Components/Update';
import LoginSignUpPage from './Components/LoginSignUpPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/update" element={<AddData/>} />
        <Route path="/" element={< Listalldata/>} />
        <Route path="/edit/:id" element={<Update/>}/>
        <Route path='/sign' element={<LoginSignUpPage/>}></Route>
      </Routes>
    </Router>
    // < Sampleentity/>
    
  );

}

export default App;
