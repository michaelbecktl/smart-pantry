import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import * as API from '../apis/recipe.ts'
import { NewRecipe } from '../../models/foodbank.ts'
import { useNavigate } from 'react-router'

export function useAllRecipes() {
  return useQuery({
    queryKey: ['allRecipes'],
    queryFn: () => API.getAllRecipes(),
  })
}

export function useAllMyRecipes(id: string) {
  return useQuery({
    queryKey: ['myRecipe'],
    queryFn: () => API.getAllMyRecipes(id),
  })
}

export function useRecipeMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fruits'] })
    },
  })

  return mutation
}

export function useRecipeDetails(name: string, id: number) {
  return useQuery({
    queryKey: [name],
    queryFn: () => API.getRecipeDetails(name, id),
  })
}

export function useRecipeIngredients(id: number) {
  return useQuery({
    queryKey: ['ingredients'],
    queryFn: () => API.getIngredientList(id),
  })
}

export function useRecipeMethod(id: number) {
  return useQuery({
    queryKey: ['method'],
    queryFn: () => API.getMethodList(id),
  })
}

export function useAddRecipe() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (newRecipe: NewRecipe) => API.addNewRecipe(newRecipe),
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ['allRecipes', 'myRecipes'] })
      navigate(`/recipe/${res.name}/${res.id}`)
    },
  })
}

// export function useFruits() {
//   const query = useQuery({ queryKey: ['fruits'], queryFn: getFruits })
//   return {
//     ...query,
//     // Extra queries go here e.g. addFruit: useAddFruit()
//   }
// }

// Query functions go here e.g. useAddFruit
/* function useAddFruit() {
  return useFruitsMutation(addFruit)
} */
