import { checkError, client } from './client';

export async function fetchBees() {
  const response = await client.from('bees').select().order('name');
  return checkError(response);
}

export async function findBeeById(id) {
  const response = await client.from('bees').select('*').match({ id }).single();
  return checkError(response);
}

export async function addSubmission(date, image, observations, location, user_id, bee_id) {
  const response = await client
    .from('submissions')
    .insert({ date, image, observations, location, user_id, bee_id });
  return checkError(response);
}
