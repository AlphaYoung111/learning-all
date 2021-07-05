function isObject(target) {
  return typeof target === 'object' && target !== null
}

function hasOwn(target, key) {
  return target.hasOwnProperty(key)
}

function reactive(target) {
  return createReactveObj(target)
}

const toRaw = new WeakMap()
const toProxy = new WeakMap()

function createReactveObj(target) {
  const proxyTarget = toProxy.get(target)
  // 已经代理过直接返回
  if (proxyTarget) {
    return proxyTarget
  }
  if (!isObject(target)) {
    return target
  }
  // 防止重复代理(???)
  if (toRaw.has(target)) {
    return target
  }

  const handler = {
    get(target, key, receiver) {
      const result = Reflect.get(target, key, receiver)
      return isObject(result) ? reactive(result) : result
    },
    set(target, key, val, receiver) {
      const hadKey = hasOwn(target, key)
      const oldValue = target[key]
      const result = Reflect.set(target, key, val, receiver)
      if (!hadKey) {
        // 新增
      } else if (oldValue !== val) {
        // 为了处理数组修改时 会先修改值在修改length属性
        // 修改
      }
      return result
    },
    deleteProperty(target, key) {
      const result = Reflect.deleteProperty(target, key)
      return result
    },
  }
  const observer = new Proxy(target, handler)
  toProxy.set(target, observer)
  toRaw.set(observer, target)
  return observer
}

const p = reactive({ name: { a: 'xx' } })
console.log((p.name.a = 'aa'))
var myMap = new Map()
myMap.set('bar', 'foo')

console.log(myMap.has('foo'))
