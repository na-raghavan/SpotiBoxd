require('dotenv').config()
const axios = require('axios');

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = 'https://na-raghavan.github.io/SpotiBoxd/';
const CODE = req.query.code; // Code from the callback query parameter
const AUTH_URL = 'https://accounts.spotify.com/authorize';
const TOP_TRACKS_URL = 'https://api.spotify.com/v1/me/top/tracks';

// Exchange code for access token
//axios.post('https://accounts.spotify.com/api/token', null, {
    //params: {
        //grant_type: 'authorization_code',
        //code: CODE,
        //redirect_uri: REDIRECT_URI,
        //client_id: CLIENT_ID,
        //client_secret: CLIENT_SECRET,
    //}
//}).then(response => {
    //const access_token = response.data.access_token; // Store access_token securely for further use
//}).catch(error => { // Handle error
//});
function login(){
    // Add event listener to the login button
    const loginButton = document.getElementById('login-button');
    loginButton.addEventListener('click', () => {
        // Redirect to Spotify login page
        window.location.href = 'https://accounts.spotify.com/authorize?client_id=17e9317ddf094191980af02c9b80d25e&response_type=code&redirect_uri=https://na-raghavan.github.io/SpotiBoxd/&scope=user-top-read&state=STATE';
    });
}
// After user logs in and is redirected back, parse the code from the URL and exchange it for an access token
const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');
document.write(code)
if (code) {
    const accessToken = code;
    
    // Make an API request to get the user's top tracks
    fetch(TOP_TRACKS_URL, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(response => response.json())
    .then(data => {
        // Process the data and display the user's top tracks
        console.log('User\'s top tracks:', data);
    })
    .catch(error => {
        console.error('Error fetching top tracks:', error);
    });
}
