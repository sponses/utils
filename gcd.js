/**
 * 辗转相除法
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function gcd_division(a, b) {
  if (b === 0) return b
  return gcd_division(b, a % b)
}

/**
 * 更相减损术
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function gcd_miuns(a, b) {
  if (a === b) return a
  return a > b ? gcd_miuns(a - b, b) : gcd_miuns(a, b - a)
}

export { gcd_division, gcd_miuns }
