import axios from 'axios';
const host = 'https://qa-dashboard-4gfp.onrender.com';
export async function getE2EData(endpoint) {
  try {
    const req = await axios(`${host}/e2e/${endpoint}`, {
      method: 'GET'
    });
    return req.data;
  } catch (error) {
    return generateErrorReturn(error);
  }
}
