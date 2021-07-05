const obj = {
  realName: 'jack',
  age: 16,
  job: 'student',
}

const fakeMan = new Proxy(obj, {
  get(target, key) {
    if (key === 'realName') return `fakeName-${target[key]}`
    return target[key]
  },
  set(target, key, val) {
    if (key === 'age') return (target[key] = val + 1)
    return (target[key] = val)
  },
})
console.log(fakeMan.realName)
console.log(fakeMan.age)
console.log(fakeMan.job)
fakeMan.age = 20
console.log(fakeMan.age)
