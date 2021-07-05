# eval 的解析

```js
function test() {
  const a = 'hello'
  return function () {
    eval('')
  }
}
test()()
```

> 此时执行 test 函数，可以在 debugger 得模式下看到在 return 出来得函数作用域中还是能够拿到 a
> 此时他并没有因为没被其他地方使用而被回收，是因为 evel 中得语句可能会对 a 进行处理如 a = 'world'
> 所以在 return 的函数中没对 a 进行垃圾回收

```js
function testEval() {
  const a = 'hello'
  return function () {
    window.eval('')
  }
}
```

> 此时我们可以通过 winfow 调用的形式来解决这个问题，此时在 testEval 函数中内部函数由于没有继续使用 a 所以变量被进行了垃圾回收
