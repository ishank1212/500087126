// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllTrainsPage from './pages/AllTrainsPage';
import SingleTrainPage from './pages/SingleTrainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={AllTrainsPage} />
        <Route path="/train/:trainNumber" component={SingleTrainPage} />
      </Routes>
    </Router>
  );
}

export default App;
