/**
 * 判断str是否为空string
 * @param {String} str
 * @returns {boolean}
 */
export const isBlank = (str) => {
  let strLen = str.length;
  if (str === null || strLen === 0) {
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