import axios from 'axios';

console.log('API Key:', process.env.REACT_APP_API_KEY); // For debugging purposes
console.log('SONAR_CLOUD Key: ', process.env.SONAR_CLOUD_TOKEN); // For debugging purposes
export default axios.create({
  baseURL: 'https://qa-dashboard-4gfp.onrender.com',
  headers: {
    'Content-type': 'application/json',
    'API-Key': process.env.REACT_APP_API_KEY
  }
});
