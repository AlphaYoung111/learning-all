
let person = {
  name: 'aa',
  age: 18
}

let state = new Proxy(person, {
  get (obj, key) {
    return obj[key]
  },
  set (obj, key, value) {
    obj[key] = value
    console.log('界面更新')
  }
})
console.log(person.name)