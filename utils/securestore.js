import * as SecureStore from 'expo-secure-store';

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

async function get(key) {
  return await SecureStore.getItemAsync(key);
}

async function remove(key) {
  return await SecureStore.deleteItemAsync(key);
}

const securestore = {
  save, get, remove
}

export default securestore