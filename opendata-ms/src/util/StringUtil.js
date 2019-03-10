/**
 * 判断str是否为空string
 * @param {String} str
 * @returns {boolean}
 */
export const isBlank = (str) => {
  if (str === null || str.length === 0) {
    return true;
  }
  for (let ch in str) {
    if (ch !== ' ') {
      return false;
    }
  }
};

/**
 * 判断str不为空string
 * @param {String} str
 * @returns {boolean}
 */
export const isNotBlank = (str) => {
  return !isBlank(str);
};