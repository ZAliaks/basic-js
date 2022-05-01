const { NotImplementedError } = require('../extensions/index.js')

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
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  if (!(date instanceof Date) || date.toString !== new Date().toString) {
    throw new Error('Invalid date!')
  }
  if (date.getMonth() == 11 || date.getMonth() == 0 || date.getMonth() == 1)
    return 'winter'
  if ((date.getMonth() >= 2) & (date.getMonth() < 5)) return 'spring'
  if ((date.getMonth() >= 5) & (date.getMonth() < 8)) return 'summer'
  if ((date.getMonth() >= 8) & (date.getMonth() < 11)) return 'fall'
}

module.exports = {
  getSeason,
}
