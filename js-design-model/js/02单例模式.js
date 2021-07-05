class SingleObject {
  login() {
    console.log('login ...')
  }
}

SingleObject.getInstance = (function () {
  let instance
  return function () {
    console.log(instance)
    if (!instance) instance = new SingleObject()
    return instance
  }
})()
// 保持只会存在一个实例
const obj1 = SingleObject.getInstance()
obj1.login()
const obj2 = SingleObject.getInstance()
obj1.login()
console.log('obj1 === obj2:', obj1 === obj2)
