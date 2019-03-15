/**
 * 测试简单服务
 */
const SimpleKoa = require('./application')

const app = new SimpleKoa()

app.use((req, res) => {
  res.writeHead(200)
  res.write('Hello World!')
  res.end()
})

app.listen(3000, () => console.log('Server running on http://127.0.0.1:3000'))

// 在浏览器中访问 http://127.0.0.1:3000
// 返回 ‘Hello World’
