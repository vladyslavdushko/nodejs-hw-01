import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const fileData = await readContacts();
    if (fileData.length < 1) {
      return console.log('Nothing to delete');
    }
    fileData.pop();
    await writeContacts(fileData);
    return;
  } catch (error) {
    return console.log(error);
  }
};

removeLastContact();
