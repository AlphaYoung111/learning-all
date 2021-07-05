class Phone {
  product() {
    return '生产手机'
  }
}

class ChineseVersionPhone {
  constructor() {
    this.userPhone = new Phone().product()
  }
  chineseProduct() {
    return `${this.userPhone} - 国行版本`
  }
}

const p1 = new ChineseVersionPhone()
console.log(p1.chineseProduct())
