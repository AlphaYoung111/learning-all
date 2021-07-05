
var express = require('express')
var app = express()

app.set('secret','sdasuidiasbdiugabs')

// 中间件
app.use(express.json())
app.use(require('cors')())
app.use('/uploads',express.static(__dirname+'/uploads'))
//  创建数据库
require('./plugins/db')(app)
// 路由区域
require('./routes/admin/index')(app)
require('./routes/web/index')(app)


app.listen(11111, function () {
  console.log('runing in http://localhost:11111')
})
