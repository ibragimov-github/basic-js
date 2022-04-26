const { NotImplementedError } = require('../extensions/index.js');

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
function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    }
    members.sort();
    let acc = '';
    members.forEach(element => {
        if (typeof element === 'string') {
            acc += element[0];
        }
    })
    return acc;
}

module.exports = {
  createDreamTeam
};

console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]))