function each(data) {
  const iterator = data[Symbol.iterator]()
  let item = { done: false }
  while (!item.done) {
    item = iterator.next()
    if (!item.done) {
      console.log(item.value)
    }
  }
}

const a1 = [1, 2, 3, 4, 5]
each(a1)
