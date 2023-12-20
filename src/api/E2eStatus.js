import commonAxios from './Common';

export async function getStatus() {
  try {
    const req = await commonAxios.get('/e2e/status');
    return req.data;
  } catch (error) {
    return generateErrorReturn(error);
  }
}
