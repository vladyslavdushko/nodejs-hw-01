import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const emptyArr = [];
    await writeContacts(emptyArr);
    return;
  } catch (error) {
    console.log(error);
  }
};

removeAllContacts();
