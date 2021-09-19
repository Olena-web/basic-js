import { NotImplementedError } from "../extensions/index.js";

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
export default function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  } else if (
    Object.prototype.toString.call(date) !== "[object Date]" ||
    !Object.keys(date).length
  ) {
    throw new Error("Invalid date!");
  } else {
    let month = date.getMonth();
    if (month == 12 || month == 1 || month == 2) {
      return "winter";
    } else if (month == 3 || month == 4 || month == 5) {
      return "spring";
    } else if (month == 6 || month == 7 || month == 8) {
      return "summer";
    } else {
      return "autumn";
    }
  }
}
console.log(getSeason(new Date(1154, 1, 22, 23, 45, 11, 500)));
console.log(getSeason(new Date(1900, 4, 17, 11, 27, 4, 321)));
console.log(getSeason(new Date(22, 6, 11, 23, 45, 11, 500)));
console.log(getSeason(new Date(1, 8, 26, 3, 0, 11, 500)));
