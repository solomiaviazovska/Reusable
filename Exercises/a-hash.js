'use strict';

const phonebook = {
  'Marcus Aurelius': '+380445554433',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
