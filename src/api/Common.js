import axios from 'axios';

export default axios.create({
  baseURL: 'https://qa-dashboard-4gfp.onrender.com',
  headers: {
    'Content-type': 'application/json'
  }
});
