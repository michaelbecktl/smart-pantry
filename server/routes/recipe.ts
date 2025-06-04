import { Router } from 'express'

import * as db from '../db/recipe.ts'

const router = Router()

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const response = await db.getAllMyRecipes(id)
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
