const axios = require('axios');

module.exports = {
  getAllTrains: async (req, res) => {
    try {
      // Make a GET request to fetch all train details (requires authentication token)
      const response = await axios.get('http://20.244.56.144/train/trains', {
        headers: {
          Authorization: `Bearer ${req.accessToken}`,
        },
      });

      // Process and sort the train data based on your requirements
      const sortedTrains = response.data.sort((a, b) => {
        // Sorting logic here based on price, tickets, and departure time
      });

      res.status(200).json(sortedTrains);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching train details' });
    }
  },

  getTrainByNumber: async (req, res) => {
    try {
      const { trainNumber } = req.params;

      // Make a GET request to fetch a specific train's details (requires authentication token)
      const response = await axios.get(`http://20.244.56.144/train/trains/${trainNumber}`, {
        headers: {
          Authorization: `Bearer ${req.accessToken}`,
        },
      });

      // Return the train details
      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching train details' });
    }
  },
};
