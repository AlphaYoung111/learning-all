@test(false)
class Demo {
  @logDec
  add(a, b) {
    return a + b
  }
}
function test(flag) {
  return function (target) {
    target.flag = flag
  }
}
// descriptor.value为 add函数
function logDec(target, name, descriptor) {
  const oldValue = descriptor.value
  descriptor.value = function () {
    console.log('decorator log')
    oldValue.apply(this, arguments)
  }
  return descriptor
}
console.log(Demo.flag)
const d1 = new Demo()
d1.add(1, 2)
