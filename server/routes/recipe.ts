import { Router } from 'express'

import * as db from '../db/recipe.ts'

const router = Router()

// -------- GET -------- //

router.get('/', async (req, res) => {
  try {
    const response = await db.getAllRecipes()
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

router.get('/u/:id', async (req, res) => {
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

// Specific Recipes //
router.get('/:name/:id', async (req, res) => {
  try {
    const name = req.params.name
    const id = req.params.id
    const response = await db.getRecipeDetails(name, id)
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
router.post('/', async (req, res) => {
  try {
    const response = await db.addNewRecipe(req.body)
    const id = response[0]
    if (response == undefined) {
      res.status(404)
    } else {
      res.json(id)
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
