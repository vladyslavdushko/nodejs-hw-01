import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = readContacts();
    return contacts;
  } catch (error) {
    return console.log(error);
  }
};

console.log(await getAllContacts());
