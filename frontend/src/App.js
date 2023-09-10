import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllTrainsPage from './pages/AllTrainsPage';
import SingleTrainPage from './pages/SingleTrainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={AllTrainsPage} />
        <Route path="/train/:trainNumber" element={SingleTrainPage} />
      </Routes>
    </Router>
  );
}

export default App;
