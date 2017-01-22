var moment = require('moment');
var now = moment();
var timestamp = 1485086911;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('YY, MMM D: H:mm'));

console.log('current moment', currentMoment.format('MMMM Do, YYYY @ H:mm A'));