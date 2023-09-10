const axios = require('axios');
const { CLIENT_ID, CLIENT_SECRET } = require('../config/config');

module.exports = {
  registerCompany: async (req, res) => {
    try {
      const { companyName, ownerName, ownerEmail, rollNo, accessCode } = req.body;

      // Make a POST request to register the company
      const response = await axios.post('http://20.244.56.144/train/register', {
        companyName,
        ownerName,
        ownerEmail,
        rollNo,
        accessCode,
      });

      // Store the client ID and client secret securely (e.g., in environment variables)
      const { clientID, clientSecret } = response.data;

      res.status(200).json({ clientID, clientSecret });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while registering the company' });
    }
  },

  getAccessToken: async (req, res) => {
    try {
      const { companyName, clientID, ownerName, ownerEmail, rollNo, clientSecret } = req.body;

      // Make a POST request to obtain an authorization token
      const response = await axios.post('http://20.244.56.144/train/auth', {
        companyName,
        clientID,
        ownerName,
        ownerEmail,
        rollNo,
        clientSecret,
      });

      // Return the access token
      const { token_type, access_token } = response.data;

      res.status(200).json({ token_type, access_token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while obtaining the access token' });
    }
  },
};
