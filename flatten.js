/**
 * 数组扁平化-递归
 */
function flat_recursion(arr) {
  const ans = []
  function dfs(x) {
    if (Array.isArray(x)) {
      for (let i = 0, len = x.length; i < len; i++) dfs(x[i])
    } else {
      ans.push(x)
    }
  }
  dfs(arr)
  return ans
}

/**
 * 数组扁平化-迭代
 */
function flat_iteration(arr) {
  const ans = []
  const stack = [arr]
  while (stack.length) {
    while (Array.isArray(stack[stack.length - 1])) {
      const temp = stack.pop()
      for (let i = temp.length - 1; i >= 0; i--) stack.push(temp[i])
    }
    if (stack.length) ans.push(stack.pop())
  }
  return ans
}

export { flat_recursion, flat_iteration }
