import commonAxios from './Common';

export async function getE2eTotalTest() {
  try {
    const req = await commonAxios.get('/e2e/totalTests');
    return req.data;
  } catch (error) {
    return generateErrorReturn(error);
  }
}
