 import React from 'react';
 import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Infotable from './InfoTable';
import InfoCharts from './InfoCharts';
 
function App() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Infotable />} />
          <Route path="/charts" element={<InfoCharts />} />
        </Routes>
      </div>
    );
}
 
export default App;