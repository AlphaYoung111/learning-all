/**
 * 替换url请求中的空参站位
 * @param url 请求地址
 * @param params 参数
 * @returns 
 */
export const fillStringPlaceholder = (url: string, params: any = {}): string => {
  let str = url
  let pattern = /(\{[a-zA-Z0-9]*\})/g
  let matchArray = str.match(pattern) || []
  matchArray.forEach(item => {
    let key = item.substring(1, item.length - 1)
    str = str.replace(item, params[key] || '')
  })
  return str
}