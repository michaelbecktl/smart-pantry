import { useState } from 'react'
import { Ingredient } from '../../models/foodbank'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAddRecipe } from '../hooks/api'
import { useNavigate } from 'react-router'
import { useAuth0 } from '@auth0/auth0-react'

function AddRecipe() {
  const { user } = useAuth0()

  const [formState, setFormState] = useState({
    name: '',
    description: '',
    imgUrl: '',
    ingredient: '',
    hidden: false,
    amount: Number(''),
    metric: 'g',
    method: '',
  })

  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [method, setMethod] = useState<string[]>([])

  const navigate = useNavigate()
  const addMutation = useAddRecipe()

  if (!user?.sub) {
    return <p>Loading...</p>
  }

  function handleChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) {
    // Handles changes in a form
    const newValue = event.currentTarget.value
    const propertyName = event.currentTarget.id
    setFormState({ ...formState, [propertyName]: newValue })
  }

  function handleIngredient(event: React.MouseEvent<HTMLButtonElement>) {
    // Adding Ingredients into a Preview List
    event.preventDefault()
    setIngredients([
      ...ingredients,
      {
        name: formState.ingredient,
        amount: Number(formState.amount),
        metric: formState.metric,
      },
    ])
    setFormState({ ...formState, ingredient: '', amount: Number('') })
  }

  function handleMethod(event: React.MouseEvent<HTMLButtonElement>) {
    // Adding Methods into a Preview List
    event.preventDefault()
    setMethod([...method, formState.method])
    setFormState({ ...formState, method: '' })
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const newRecipe = {
      name: formState.name,
      description: formState.description,
      imgUrl: formState.imgUrl,
      hidden: formState.hidden,
      ingredient: ingredients,
      method: method,
      createdBy: user?.sub as string,
    }
    const id: number = await addMutation.mutate(newRecipe)
    navigate(`/recipe/${id}`)
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Recipe Name: </label>
          <input
            id="name"
            type="text"
            onChange={handleChange}
            value={formState.name}
            placeholder="Name of recipe"
          />
          <br />
          <label htmlFor="description">Description: </label>
          <input
            id="description"
            type="text"
            onChange={handleChange}
            value={formState.description}
            placeholder="Add a description"
          />
          <br />
          <label htmlFor="imgUrl">Image: </label>
          <input
            id="imgUrl"
            type="text"
            onChange={handleChange}
            value={formState.imgUrl}
            placeholder="Upload an image"
          />
          <br />
          <label htmlFor="ingredient">Add Ingredients: </label>
          <input
            id="ingredient"
            type="text"
            onChange={handleChange}
            value={formState.ingredient}
            placeholder="Add an ingredient!"
          />
          <input
            id="amount"
            type="number"
            onChange={handleChange}
            value={formState.amount}
            placeholder="Amount"
          />
          <select name="metric" id="metric" onChange={handleChange}>
            <option value="g">g</option>
            <option value="ml">ml</option>
          </select>
          <button onClick={handleIngredient}>Add</button>
          <br />
          <label htmlFor="method">Add Method: </label>
          <input
            id="method"
            type="text"
            onChange={handleChange}
            value={formState.method}
            placeholder="Add a method!"
          />
          <button onClick={handleMethod}>Add</button>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <h1>Recipe Card Preview</h1>
        <img src={formState.imgUrl} alt={formState.name} />
        <h2>{formState.name}</h2>
        <p>{formState.description}</p>
        <h2>Ingredients</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.name} {ingredient.amount}
              {ingredient.metric}
            </li>
          ))}
        </ul>
        <h2>Method</h2>
        <ul>
          {method.map((method, index) => (
            <li key={index}>{method}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default AddRecipe
