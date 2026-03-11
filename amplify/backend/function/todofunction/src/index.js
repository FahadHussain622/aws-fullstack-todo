const awsServerlessExpress = require('aws-serverless-express')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())

let todos = [
  { id: "1", name: "Learn AWS", completed: false },
  { id: "2", name: "Build Fullstack App", completed: false }
]

app.get("/todos", (req, res) => {
  res.json(todos)
})

app.post("/todos", (req, res) => {
  const todo = req.body
  todos.push(todo)
  res.json(todo)
})

app.put("/todos/:id", (req, res) => {
  const id = req.params.id
  const updated = req.body

  todos = todos.map(todo =>
    todo.id === id ? updated : todo
  )

  res.json(updated)
})

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id
  todos = todos.filter(todo => todo.id !== id)
  res.json({ success: true })
})

const server = awsServerlessExpress.createServer(app)

exports.handler = (event, context) => {
  return awsServerlessExpress.proxy(server, event, context)
}