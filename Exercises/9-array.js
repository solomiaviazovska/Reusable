'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Mao Zedong', phone: '+380445554434' },
];

const findPhoneByName = (name) => {
  for (const r of phonebook) if (r.name === name) return r.phone;
};

module.exports = { phonebook, findPhoneByName };
