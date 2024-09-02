import { readContacts } from '../utils/readContacts.js';
export const countContacts = async () => {
  try {
    const fileData = await readContacts();
    return fileData.length;
  } catch (error) {
    return console.log(error);
  }
};

console.log(await countContacts());
