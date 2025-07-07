// const { parsePhoneNumberFromString } = require('libphonenumber-js');

// function normalizePhoneNumber(input, defaultCountry = 'US') {
//   const phoneNumber = parsePhoneNumberFromString(input, defaultCountry);
//   if (phoneNumber && phoneNumber.isValid()) {
//     // Get E.164 format and remove the leading '+'
//     return phoneNumber.number.replace('+', '');
//   }

//   return '';
// }

function normalizePhoneNumber(input) {

  if(!input){
    return ""
  }

  // Remove all non-digit characters
  let phone = input.replace(/\D/g, '');

  phone.replace(" ", "")
  
  // Remove leading '0' after country code
  if (phone.startsWith('8550')) {
    phone = '855' + phone.slice(4);
  }

  // If it starts with just '0', replace with '855'
  else if (phone.startsWith('0')) {
    phone = '855' + phone.slice(1);
  }

  // If it starts with '+855', remove '+'
  else if (phone.startsWith('+855')) {
    phone = '855' + phone.slice(4);
  }

  return phone;
}

module.exports = normalizePhoneNumber