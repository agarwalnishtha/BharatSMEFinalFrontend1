import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import SimpleComponent from './SimpleComponent';
import KhakhraMachineList from './KhakhraMachineList';
import KhakhraMachineDetail from './KhakhraMachineDetail';
import CoolingMachineList from './CoolingMachineList';
import CoolingMachineDetail from './CoolingMachineDetail';
import OilMachineList from './OilMachineList';
import OilMachineDetail from './OilMachineDetail';
import NamkeenSweetsMachineList from './NamkeenSweetsMachineList';
import NamkeenSweetsMachineDetail from './NamkeenSweetsMachineDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Homepage />} />
        <Route path="/simple" element={<SimpleComponent />} />
        <Route path='/khakhra-machines' element={<KhakhraMachineList />} />
        <Route path='/:productId' element={<KhakhraMachineDetail />} />
        <Route path='/cooling-machines' element={<CoolingMachineList />} />
        <Route path='/cooling-machines/:coolingId' element={<CoolingMachineDetail />} />
        <Route path='/oil-machines' element={<OilMachineList />} />
        <Route path='/oil-machines/:oilId' element={<OilMachineDetail />} />
        <Route path='/namkeen-sweets-machines' element={<NamkeenSweetsMachineList />} />
        <Route path='/namkeen-sweets-machines/:namkeenId' element={<NamkeenSweetsMachineDetail />} />
      </Routes>
    </Router>
  );
};

export default App;