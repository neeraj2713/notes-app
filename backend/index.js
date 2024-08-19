import express from 'express'
import {createTodo, updateTodo} from './types.js'
import {todo} from './db.js'
import {cors} from 'cors'

const app = express()
app.use(express.json());
app.use(cors())

app.listen(3001, () => {
  console.log("server is running")
})

app.post('/todo', async (req, res) => {
  const createPayload = req.body
  const parsedPayload = createTodo.safeParse(createPayload)
  if(!parsedPayload.success){
    res.status(411).json({
      msg: "You send the wrong inputs",
    })
    return;
  }

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  })

  res.json({
    msg: "Todo created"
  })

})

app.get('/todos', async (req, res) => {
  const todos = await todo.find()
  res.json({
    todos
  })
})

app.put('/completed', async (req, res) => {
  const updatePayload = req.body
  const parsedPayload = updateTodo.safeParse(createPayload)
  if(!parsedPayload.success){
    res.status(411).json({
      msg: "You send the wrong inputs",
    })
    return;
  }

  await todo.update({
    _id: req.body.id
  }, {
    completed: true
  })

  res.json({
    msg: "todo marked as completed!"
  })

})

