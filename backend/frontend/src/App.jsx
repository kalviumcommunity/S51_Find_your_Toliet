import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddData from './Components/Adddata';
import Listalldata from './Components/Listalldata';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddData/>} />
        <Route path="/alldata" element={< Listalldata/>} />
      </Routes>
    </Router>
  );

}

export default App;
