import { checkError, client } from './client';

export async function fetchBees() {
  const response = await client.from('bees').select().order('name');
  return checkError(response);
}
