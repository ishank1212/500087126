const BASE_URL = 'http://localhost:3000/api';

const trainService = {
  getAllTrains: async () => {
    const response = await fetch(`${BASE_URL}/trains`);
    if (!response.ok) {
      throw new Error('Error fetching all trains');
    }
    return response.json();
  },
  
  getTrainByNumber: async (trainNumber) => {
    const response = await fetch(`${BASE_URL}/trains/${trainNumber}`);
    if (!response.ok) {
      throw new Error('Error fetching train details');
    }
    return response.json();
  },
};

export default trainService;
