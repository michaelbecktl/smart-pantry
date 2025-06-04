export interface FoodBank {
  foodbank: Recipe[]
}

export interface Recipe {
  name: string
  createdBy: string
  ingredients: string[] // To be updated with new Database Format in future //
  method: string[]
  imgUrl: string
}

export interface RecipePrototype {
  // To be updated with new Database Format in future //
  name: string
  description: string
  yield: number
  ingredients: Ingredient[]
  method: string[]
  imgUrl: string
}

// Placeholder Type
export interface Ingredient {
  item: string
  amount: number
}

export interface RecipeData extends Recipe {
  id: number
}
