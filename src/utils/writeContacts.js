import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const dataToWrite = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, dataToWrite, 'utf-8');
    console.log('Дані успішно записано у файл');
    return;
  } catch (error) {
    console.error('Помилка при записі даних:', error);
    throw error;
  }
};
