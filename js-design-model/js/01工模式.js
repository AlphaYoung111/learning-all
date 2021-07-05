class Product {
  constructor(name) {
    this.name = name
    this.init()
  }
  init() {
    console.log('init done')
  }
  otherFn() {
    console.log('other function')
  }
}

class Creator {
  create(name) {
    return new Product(name)
  }
}

const p1 = new Creator('p1')
p1.create()
