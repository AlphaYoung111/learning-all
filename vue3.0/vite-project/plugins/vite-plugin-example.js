export default function myExample() {
  // 每一次import 都会请求和操作
  return {
    name: 'my-example',
    resole(source) {
      console.log(source)
      if (source === 'fs') {
        // 在这里返回source表示，vite不会在通过其他插件去处理这个id的请求
        return source
      }
      // 如果返回的是null表示其他插件继续处理
      return null
    },
    load(id) {
      if (id === 'fs') {
        return 'export default "This is fs!"'
      }
      return null
    },
  }
}
