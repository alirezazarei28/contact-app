import { alphabets } from "../alphabet";
import { AlphabeticContact, DataType } from "../Types/types";



const prepareTabsData = (data: DataType): AlphabeticContact => {
  const alphabeticContacts: AlphabeticContact = {};

  alphabets.forEach((char) => {
    alphabeticContacts[char] = [];
  });

  data.results.forEach((contact) => {
    const firstChar = contact.name.last[0];

    alphabeticContacts[firstChar.toUpperCase()] &&
      alphabeticContacts[firstChar.toUpperCase()].push(contact);
  });
  return alphabeticContacts;
};

export { prepareTabsData };
