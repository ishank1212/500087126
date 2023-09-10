import React, { useState, useEffect } from 'react';
import AllTrains from '../components/AllTrains';
import trainService from '../services/trainService';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Fetch all trains
    trainService.getAllTrains()
      .then((data) => setTrains(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      <AllTrains trains={trains} />
    </div>
  );
};

export default AllTrainsPage;
