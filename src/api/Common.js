import axios from 'axios';

console.log('API Key:', process.env.REACT_APP_API_KEY); // For debugging purposes

export default axios.create({
  baseURL: 'https://qa-dashboard-4gfp.onrender.com',
  headers: {
    'Content-type': 'application/json',
    'API-Key': process.env.REACT_APP_API_KEY
  }
});
