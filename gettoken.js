var Spotify = require("machinepack-spotify");

// Get access token to use with requests to Spotify Web API.
Spotify.getAccessToken({
  clientId: "5dda2f63f20b4d30bc75f79cdf895bc3",
  clientSecret: "00648110774344d4a9336dbd288e5291"
}).exec({
  // An unexpected error occurred.
  error: function(err) {
    console.log(err);
  },
  // OK.
  success: function(token) {
    console.log(token);
  }
});
