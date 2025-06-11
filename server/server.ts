import express from 'express'
import * as Path from 'node:path'

import recipe from './routes/recipe.ts'
import user from './routes/user.ts'
import ingredients from './routes/ingredients.ts'
import method from './routes/method.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/recipe', recipe)
server.use('/api/v1/user', user)
server.use('/api/v1/ingredients', ingredients)
server.use('/api/v1/method', method)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
