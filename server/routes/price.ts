import { Router } from 'express'

import * as db from '../db/price.ts'

const router = Router()

// -------- GET -------- //

router.get('/:name', async (req, res) => {
  try {
    const name = req.params.name
    const response = await db.getPriceByName(name)
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

export default router
