import { Router } from 'express'

import * as db from '../db/method.ts'

const router = Router()

// -------- GET -------- //

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const response = await db.getMethodList(id)
    if (response == undefined) {
      res.status(404)
    } else {
      res.json(response)
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// -------- POST -------- //
export default router
