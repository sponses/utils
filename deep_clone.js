/**
 * 深拷贝-DFS
 */
const deep_clone_dfs = function (obj) {
  // 声明一个结构用于存储已访问过的节点
  // 因为节点之间可能存在循环引用的情况
  const visited = new WeakMap()

  function dfs(obj, prev = {}) {
    // 函数类型 直接返回函数的拷贝
    if (typeof obj === 'function') return obj.bind(prev)

    // 基本类型 直接返回值
    if (typeof obj !== 'object') return obj

    // 若该节点已访问过 直接返回
    if (visited.has(obj)) return visited.get(obj)

    // 结果变量
    let ans

    // 不考虑WeapMap 和 WeakSet 类型 因为无法遍历

    switch (Object.prototype.toString.call(obj)) {
      // 处理 Array 类型
      case '[object Array]': {
        ans = new Array()
        visited.set(obj, ans)
        // 数组用 for 循环(效率最高)
        for (let i = 0, len = obj.length; i < len; i++) {
          ans.push(dfs(obj[i], ans))
        }
        break
      }
      // 处理 Map 类型
      case '[object Map]': {
        ans = new Map()
        visited.set(obj, ans)
        // Map 结构用 for of 循环
        for (let i of obj) {
          ans.set(i[0], dfs(i[1], ans))
        }
        break
      }
      // 处理 Set 类型
      case '[object Set]': {
        ans = new Set()
        visited.set(obj, ans)
        // Set 结构跟 Map 一样 使用 for of 循环
        for (let i of obj) {
          ans.add(dfs(i, ans))
        }
        break
      }
      // 处理 Object 类型
      case '[object Object]': {
        ans = new Object()
        visited.set(obj, ans)
        // 这里对象只拷贝自身可枚举属性
        // 遍历使用 Object.entries()
        // 如需拷贝原型上的可枚举属性
        // 可以使用 for in 代替
        const entries = Object.entries(obj)
        for (let i = 0, len = entries.length; i < len; i++) {
          const temp = entries[i]
          ans[temp[0]] = dfs(temp[1], ans)
        }
        break
      }
    }

    return ans
  }

  return dfs(obj)
}

export { deep_clone_dfs }
