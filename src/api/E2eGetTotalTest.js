import axios from 'axios';
const host = 'https://qa-dashboard-4gfp.onrender.com';
export async function getE2eTotalTest() {
  try {
    const req = await axios(`${host}/e2e/totalTests`, {
      method: 'GET'
    });
    return req.data;
  } catch (error) {
    return generateErrorReturn(error);
  }
}
