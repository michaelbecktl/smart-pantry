export interface FoodBank {
  foodbank: Recipe[]
}

export interface Recipe {
  name: string
  description: string
  createdBy: string
  createdAt: string
  imgUrl: string
  portion: number
  hidden: boolean
}

export interface RecipePrototype {
  // To be updated with new Database Format in future //
  name: string
  description: string
  portion: number
  ingredients: Ingredient[]
  method: string[]
  imgUrl: string
  portion: number
}

// Placeholder Type
export interface Ingredient {
  name: string
  amount: number
  metric: string
}

export interface IngredientData extends Ingredient {
  recipeId: number
  ingredientId: number
}
export interface RecipeData extends Recipe {
  id: number
}

export interface Method {
  recipeId: number
  step?: number
  procedure: string
}

export interface NewRecipe {
  name: string
  description: string
  createdBy: string
  imgUrl: string
  portion: number
  hidden: boolean
  ingredient: Ingredient[]
  method: string[]
}

export interface Price {
  name: string
  metric: string
  month: string
  dataCost: number
  userCost: number
  avgCost: number
}
