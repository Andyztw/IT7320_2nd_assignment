const express = require('express')
const app = express()
const mysql = require('mysql')
const morgan = require('morgan')
const bodyParser = require('body-parser')

//start mysql
const connection = getConnection()

app.use(bodyParser.urlencoded({extended: false}))

app.use(morgan('short'))

app.use(express.static('./public'))
app.post('/user_create', (req, res) => {
  console.log('successfully done')

  const id = req.body.create_id
  const firstName = req.body.create_first_name
  const lastName = req.body.create_last_name
  const queryString = 'INSERT INTO user_data (id, first_name, last_name, assess, specialties) VALUES (?, ?, ?, ?, ?)'
  getConnection().query(queryString, [id, firstName, lastName, assess, specialties], (err, results, fields) => {
    if (err) {
      console.log('Failed' + err)
      res.sendStatus(500)
      return
    }
    console.log('inserted', results.insertId)
   return res.redirect('back')
    res.end()
  })
})

function getConnection() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Rpg90930!',
    database: 'user_data'
  })
}

app.get('/user/:id', (req, res) => {


  console.log('Fetching user with id ' + req.params.id)


  const userId = req.params.id

  const queryString = "SELECT * FROM user_data WHERE id = ?"
  
  connection.query(queryString, [userId], (err, rows, fields) => {
    if (err) {
      console.log("Failed" + err)
      res.sendStatus(500)
      return
      //throw err        
    }
    console.log("Fetched users successfully")  

    const users = rows.map((row) => {
      return {firstName: row.first_name, 
              lastName: row.last_name,
              assess: row.assess,
              specialties: row.specialties
             }
    })
    res.json(rows)
  })
})

app.get("/", (req, res) => {
  console.log('Whoop Whoop')
  res.send('Whoop Whoop')
})

app.get('/drop', (req, res) => {
  connection.connect(function(err) {
  var dropTable = "DROP TABLE IF EXISTS user_data";
  connection.query(dropTable, function (err, result) {
    if (err) throw err
      console.log(result)
    })
  })
})  

app.get('/users', (req, res) => {
  var user1 = {id: 1, firstName: 'Stephen', lastName: 'Curry', assess: "98%", specialties: "nice point guard"}
  const user2 = {id: 2, firstName: 'Kevin', lastName: 'Durant', assess: "67%", specialties: "hum...IDK"}
  const user3 = {id: 3, firstName: 'Hank', lastName: 'Chou', assess: "100%", specialties: "whatever Thanos can do, I can do better"}
  res.json([user1, user2, user3])

})

app.listen(3003, () => {
  console.log('Server is running')
})