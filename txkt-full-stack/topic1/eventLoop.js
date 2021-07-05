setTimeout(() => {
  console.log(1)
}, 0)
setImmediate(() => {
  console.log(2)
})
process.nextTick(() => {
  console.log(3)
})
new Promise((resolve, reject) => {
  console.log(4)
  resolve(4)
  reject(4)
})
  .then(() => {
    console.log(5)
  })
  .catch(() => {
    console.log(6)
  })
console.log(7)
// 同步 > 异步队列优先 > nextTick > Promsie.then > setTimeout > setImmediate
// 4
// 7
// 3
// 5
// 1
// 2
