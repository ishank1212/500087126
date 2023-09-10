const axios = require('axios');
const { CLIENT_ID, CLIENT_SECRET } = require('../config/config');

module.exports = async (req, res, next) => {
  try {
    // Check if the access token is present in the request headers
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Make a request to the John Doe Railway Server to validate the token
    const response = await axios.get('http://20.244.56.144/train/token', {
      headers: {
        Authorization: token,
      },
    });

    if (response.status !== 200) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Store the access token in the request for further use
    req.accessToken = token;

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while validating the access token' });
  }
};
