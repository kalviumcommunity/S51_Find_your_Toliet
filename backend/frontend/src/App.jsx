import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddData from './Components/Adddata';
import Listalldata from './Components/Listalldata';
import Sampleentity from './Components/Sampleentity'
import Update from './Components/Update';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/update" element={<AddData/>} />
        <Route path="/" element={< Listalldata/>} />
        <Route path="/edit/:id" element={<Update/>}/>
      </Routes>
    </Router>
    // < Sampleentity/>
    
  );

}

export default App;
