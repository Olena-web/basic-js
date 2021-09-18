import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(/* members */) {
  
  
  let secretObj = members.map((i) => {
    if (typeof i === "string") {
      return i[0];
    }
  });
  const nameTeam = secretObj.sort().join("");
  if (nameTeam !== "") {
    return nameTeam;
  } else {
    return false;
  }
}


