import axios from 'axios';
const host = 'https://qa-dashboard-4gfp.onrender.com';
export async function getStatus() {
  try {
    const req = await axios(`${host}/e2e/status`, {
      method: 'GET'
    });
    return req.data;
  } catch (error) {
    return generateErrorReturn(error);
  }
}
