class ObserEvent {
  constructor() {
    this.keyMap = new Map()
  }
  on(key, fn) {
    const cb = this.keyMap.get(key)
    if (!cb) {
      const arr = new Set()
      this.keyMap.set(key, arr.add(fn))
    } else {
      cb.add(fn)
    }
  }
  emit(key, args) {
    const cb = this.keyMap.get(key)
    if (!cb) throw new Error('function not defined')
    cb.forEach((fn) => {
      fn(args)
    })
  }
}

const e1 = new ObserEvent()
e1.on('test', (str) => {
  console.log(str)
})
e1.on('test', (str) => {
  console.log(`other - ${str}`)
})

e1.emit('test', 'test')
