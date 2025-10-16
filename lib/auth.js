/** Quick placeholder for auth verification - implement real Quick Auth later */
export async function verifyQuickAuthToken(token){
  if(!token) return null;
  return { fid: 1234 }; // PLACEHOLDER
}
