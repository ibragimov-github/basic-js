const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let results = {};
    for (let i of domains) {
        let dom = '';
        for (let x of i.split('.').reverse()) {
            dom += `.${x}`;
            if (dom in results) {
                results[dom] += 1;
            }
            else {
                results[dom] = 1;
            }
        }
    }
    return results;
}

module.exports = {
  getDNSStats
};

