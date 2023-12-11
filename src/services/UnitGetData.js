import axios from 'axios';
const host = 'https://qa-dashboard-4gfp.onrender.com';
export async function getUnitData(endpoint) {
  try {
    const req = await axios(`${host}/unit/${endpoint}`, {
      method: 'GET'
    });
    return req.data;
  } catch (error) {
    return generateErrorReturn(error);
  }
}
