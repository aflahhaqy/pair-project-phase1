const express = require('express')
const Controller = require('./controllers/controller')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
// app.get('/', Controller.home)
app.get('/register', Controller.getRegister)
app.post('/register', Controller.postRegister)
app.get('/login', Controller.getLogin)
app.post('/login', Controller.postLogin)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})