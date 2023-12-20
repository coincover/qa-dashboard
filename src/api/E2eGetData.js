import commonAxios from './Common';

export async function getE2EData(endpoint) {
  try {
    const req = await commonAxios.get(`/e2e/${endpoint}`);
    return req.data;
  } catch (error) {
    return generateErrorReturn(error);
  }
}
