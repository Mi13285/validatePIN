// function validatePIN(pin) {
//   if (pin.length === 4 || pin.length === 6) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(validatePIN("1"));
// console.log(validatePIN("00000000"));

function validatePIN(pin) {
  let pinlen = pin.length;
  let isCorrectLength = pinlen == 4 || pinlen == 6;
  let hasOnlyNumbers = pin.match(/^\d + $/);
  if (isCorrectLength && hasOnlyNumbers) {
    return true;
  }
  return false;
}
console.log(validatePIN("1"));
console.log(validatePIN("00000000"));
