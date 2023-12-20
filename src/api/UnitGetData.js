import commonAxios from './Common';

export async function getUnitData(endpoint) {
  try {
    const req = await commonAxios.get(`/unit/${endpoint}`);
    return req.data;
  } catch (error) {
    return generateErrorReturn(error);
  }
}
