import { Router } from 'express'
import * as db from '../db/user.ts'
import checkJwt, { JwtRequest } from '../auth0.js'

const router = Router()

router.get('/:auth0id', async (req, res) => {
  try {
    const id = req.params.auth0id
    const response = await db.getUserByAuth(id)
    if (response == undefined) {
      res.status(404)
    } else {
      res.status(200).json(response)
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', checkJwt, async (req: JwtRequest, res) => {
  try {
    const response = await db.addNewUser(req.body)
    return response
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
