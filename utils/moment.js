// utils/moment.js
const moment = require('moment');

// Extend moment prototype to add .standard()
moment.fn.standard = function () {
  return this.format("DD-MMM-YYYY HH:mm A");
};

module.exports = moment;