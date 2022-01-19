import { client, checkError } from './client';

export async function addSubmission(date, image, observations, location, user_id, bee_id) {
  const response = await client
    .from('submissions')
    .insert({ date, image, observations, location, user_id, bee_id });
  return checkError(response);
}

export async function getUserBees(user_id) {
  const response = await client.from('submissions').select('*').match({ user_id });
  return checkError(response);
}
