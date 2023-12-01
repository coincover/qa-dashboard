import axios from 'axios';
const host = 'https://qa-dashboard-4gfp.onrender.com';
export async function getData() {
  try {
    const req = await axios(`${host}/identity-service`, {
      method: 'GET'
    });
    return req.data;
  } catch (error) {
    return generateErrorReturn(error);
  }
}
