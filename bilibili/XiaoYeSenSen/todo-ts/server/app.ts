import express, { Application } from 'express'

import bodyParser from 'body-parser'
import { fileOperation, readFile, writeFile } from './util'
import { ITodoData } from '../src/js/types'

const app: Application = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-methods', 'POST,GET,PUT,DELETE,OPTIONS')
  next()
})


app.get('/todoList', (req, res) => {
  const todoList = fileOperation('todo.json') as string
  res.send(todoList)
})

app.post('/toggle', (req, res) => {
  const id: number = parseInt(req.body.id)
  fileOperation('todo.json', (todoList: ITodoData[]) => {
    return todoList.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
  })
  res.send()
})

app.post('/remove', (req, res) => {
  const id: number = parseInt(req.body.id)
  let todoList: ITodoData[] = JSON.parse(readFile('todo.json') || '[]')
  fileOperation('todo.json', (todoList: ITodoData[]) => {
    return todoList.filter(item => item.id !== id)
  })
  res.send(todoList)
})

app.post('/add', (req, res) => {
  const todo: ITodoData = JSON.parse(req.body.todo)
  fileOperation('todo.json', (todoList: ITodoData[]) => {
    const isExist = todoList.find(item => item.content === todo.content)
    if (isExist) res.send('已经存在')
    return todoList.push(todo)
  })
  res.send()
})

app.listen(8080, function () {
  console.log('listen on 8080');
})

