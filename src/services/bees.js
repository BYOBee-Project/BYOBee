import { checkError, client } from './client';

export async function fetchBees() {
  const response = await client.from('bees').select().order('name');
  return checkError(response);
}

export async function findBeeById(id) {
  const response = await client.from('bees').select('*').eq('id', id).single();
  return checkError(response);
}
