const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) =>
  res.send("From nesyuri")
)

app.get('/minhyun', (req,res)=>{
 res.redirect("https://i.pinimg.com/originals/57/c3/2c/57c32c38ed7a8a90c1288221efe7271a.jpg")
})
app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
