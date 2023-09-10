import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SingleTrain from '../components/SingleTrain';
import trainService from '../services/trainService';

const SingleTrainPage = () => {
  const { trainNumber } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    // Fetch a single train by train
    trainService.getTrainByNumber(trainNumber)
      .then((data) => setTrain(data))
      .catch((error) => console.error(error));
  }, [trainNumber]);

  return (
    <div>
      {train ? (
        <div>
          <h1>Single Train Details</h1>
          <SingleTrain train={train} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleTrainPage;
