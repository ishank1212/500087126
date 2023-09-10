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

      const sortedTrains = response.data.map((train) => {
        // Calculate the actual departure time by considering delays (in minutes)
        const departureTime = new Date(train.departureTime.Hours * 60 * 60 * 1000 + train.departureTime.Minutes * 60 * 1000 + train.delayedBy * 60 * 1000);

        return {
          trainName: train.trainName,
          trainNumber: train.trainNumber,
          seatsAvailable: train.seatsAvailable,
          price: train.price,
          actualDepartureTime: departureTime,
        };
      });

      // Sort the trains by price (ascending), tickets (descending), and departure time (descending)
      sortedTrains.sort((a, b) => {
        // Sort by price in ascending order
        const priceDiff = a.price.sleeper + a.price.AC - (b.price.sleeper + b.price.AC);
        if (priceDiff !== 0) return priceDiff;

        // Sort by tickets in descending order
        const ticketsDiff = b.seatsAvailable.sleeper + b.seatsAvailable.AC - (a.seatsAvailable.sleeper + a.seatsAvailable.AC);
        if (ticketsDiff !== 0) return ticketsDiff;

        // Sort by departure time in descending order
        return b.actualDepartureTime - a.actualDepartureTime;
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
