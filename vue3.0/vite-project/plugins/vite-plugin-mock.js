import path from 'path'

let mockRouteMap = {}

function matchRoute(req) {
  let url = req.url
  let method = req.method.toLowerCase()
  let routeList = mockRouteMap[method]
  return routeList && routeList.find((item) => item.path === url)
}

function createRoute(mockConfList) {
  mockConfList.forEach((mockCong) => {
    let method = mockCong.type || 'get'
    let path = mockCong.url
    let handler = mockCong.response
    let route = { path, method: method.toLowerCase(), handler }
    if (!mockRouteMap[method]) {
      mockRouteMap[method] = []
    }
    mockRouteMap[method].push(route)
  })
}

function send(body) {
  let chunk = JSON.stringify(body)
  if (chunk) {
    chunk = Buffer.from(chunk, 'utf8')
    this.setHeader('Content-Length', chunk.length)
  }

  this.setHeader('Content-Type', 'application/json')

  this.statusCode = 200

  this.end(chunk, 'utf8')
}

export default function (options = {}) {
  options.entry = options.entry || './mock/index.js'

  if (!path.isAbsolute(options.entry)) {
    options.entry = path.resolve(process.cwd(), options.entry)
  }

  // 返回插件
  return {
    configureServer: function ({ app }) {
      const mockObj = require(options.entry)
      createRoute(mockObj)

      const middleware = (req, res, next) => {
        let route = matchRoute(req)

        if (route) {
          res.send = send
          route.handler(req, res)
        } else {
          next()
        }
      }

      app.use(middleware)
    },
  }
}
