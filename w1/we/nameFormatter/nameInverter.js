const { array } = require("yargs");

const nameInverter = function(name) {
  if (name === '') {
    return '';
    }
    return name;
}

const elem = name.split(' ');
const honorifics = ['Mr.', 'Mrs.', 'Ms.', 'Dr.'];
let start = 0;

for (let i = 0; i < elem.length; i++) {
  for (let honorific of honorifics) {
    if (honorific === arr[i]) {
      start += 1;
      break;
    }
  }
}

let results = [];

for (let i = start; i < elem.length; i++) {
  if(elem[i] !== '' && !results.length) {
    results.push(arr[i]);
  } else if (elem[i] + ',');
  results.reverse();
}
console.log(results);

if (start && results.length) {
  return elem[start - 1] + ' ' + results.join(' ');
} else {
  return results.join(' ');
}
console.log("Des", nameInverter("name"));
module.exports = nameInverter;
