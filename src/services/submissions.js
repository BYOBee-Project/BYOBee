import { client, checkError } from './client';

export async function addSubmission(name, date, image1, observations, location, user_id, bee_id) {
  const response = await client
    .from('submissions')
    .insert({ name, date, image1, observations, location, user_id, bee_id });
  return checkError(response);
}

export async function getUserBees(user_id) {
  const response = await client.from('submissions').select('*').match({ user_id });
  return checkError(response);
}

export async function findUserBee(id) {
  const reponse = await client.from('submissions').select('*').match({ id }).single();
  return checkError(reponse);
}
