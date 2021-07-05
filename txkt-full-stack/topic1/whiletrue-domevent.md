# JS 多线程

```js
$('#test').on(function () {
  console.log('dom-evnet')
})
while (true) {
  console.log('i am while', Math.random())
}
```

> JS 的运行是单线程自上而下的，而 dom 的事件触发是属于异步，while 执行却是属于同步，所以可以当我们点击按钮的时候是没有任何反应的

## 方法一：使用 Concurrent.Thread.js 库

```html

<script src="./Concurrent.Thread.js"></script>
<script type="text/x-script.multithreaded-js">
    $('#test').on(function () {
        console.log('dom-evnet')
    })
    while (true) {
        console.log('i am while', Math.random())
    }
</scrit>
```

## 方法二：worker

```js
// main.js
$('#test').on(function () {
  console.log('dom-evnet')
})
const worker = new Worker('task.js')
worker.onmessage = function (event) {
  // 这里拿到的就是下面的随机数
  console.log(event.data)
}
```

```js
// task.js
while (true) {
  postMessage(Math.random())
  console.log('i am while', Math.random())
}
```
