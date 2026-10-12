'use strict';

const fn = () => {
  const a = { name: 'Marcus' };
  let b = { name: 'Marcus' };
  a.name = 'Lucius';
  b.name = 'Lucius';
  try {
    // eslint-disable-next-line no-const-assign
    a = {};
  } catch (e) {
    console.log(e.message);
  }
  b = {};
};

module.exports = { fn };
