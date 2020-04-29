import { gcd_division } from './index'
/**
 * 最小公倍数
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function lcm(a, b) {
  return (a * b) / gcd_division(a, b)
}

export { lcm }
