import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import SimpleComponent from './SimpleComponent';
import KhakhraMachineList from './KhakhraMachineList';
import KhakhraMachineDetail from './KhakhraMachineDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Homepage />} />
        <Route path="/simple" element={<SimpleComponent />} />
        <Route path='/khakhra-machines' element={<KhakhraMachineList />} />
        <Route path='/khakhra-machines/:productId' element={<KhakhraMachineDetail />} />
      </Routes>
    </Router>
  );
};

export default App;