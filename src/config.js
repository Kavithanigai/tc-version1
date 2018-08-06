module.exports = {
  PORT: process.env.PORT || 3090,
  // other stuff
  API_BASE_URL:
    process.env.REACT_APP_API_BASE_URL ||
    'https://agile-beach-35703.herokuapp.com'
};
