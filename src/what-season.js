const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    if (date === undefined) {
        return 'Unable to determine the time of year!';
    }
    try {
        date.getTime();
    }
    catch {
        throw new Error('Invalid date!')
    }
    if (date.getMonth() === 11 ||date.getMonth() === 0 || date.getMonth() === 1) {
        return 'winter';
    }
    if (date.getMonth() === 2 ||date.getMonth() === 3 || date.getMonth() === 4) {
        return 'spring';
    }
    if (date.getMonth() === 5 ||date.getMonth() === 6 || date.getMonth() === 7) {
        return 'summer';
    }
    if (date.getMonth() === 8 ||date.getMonth() === 9 || date.getMonth() === 10) {
        return 'autumn';
    }
}

module.exports = {
  getSeason
};
let i = new Date(2019, 11, 22, 23, 45, 11, 500);
console.log(getSeason(i))