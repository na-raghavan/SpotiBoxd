require('dotenv').config()
const axios = require('axios');

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = 'https://na-raghavan.github.io/SpotiBoxd/';
const CODE = req.query.code; // Code from the callback query parameter

// Exchange code for access token
axios.post('https://accounts.spotify.com/api/token', null, {
    params: {
        grant_type: 'authorization_code',
        code: CODE,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
    }
}).then(response => {
    const access_token = response.data.access_token; // Store access_token securely for further use
}).catch(error => { // Handle error
});