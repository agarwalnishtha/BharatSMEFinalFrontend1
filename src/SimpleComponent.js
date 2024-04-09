// SimpleComponent.js

import React, { useState }  from 'react';
import KhakhraMachineDetail from './KhakhraMachineDetail';

const SimpleComponent = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };

  return (
    <div>
      <h2>This is a Simple Component</h2>
      <p>Replace the Homepage component with this simple component for testing purposes.</p>
      <button onClick={handleShowModal}>Show Modal</button>
      {showModal && <KhakhraMachineDetail onClose={handleCloseModal} />}
    </div>
  );
};

export default SimpleComponent;
