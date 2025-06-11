import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import * as API from '../apis/recipe.ts'

export function useAllRecipes() {
  return useQuery({
    queryKey: ['allrecipes'],
    queryFn: () => API.getAllRecipes(),
  })
}

export function useAllMyRecipes(id: string) {
  return useQuery({
    queryKey: ['myrecipe'],
    queryFn: () => API.getAllMyRecipes(id),
  })
}

export function useRecipeDetails(name: string, id: number) {
  return useQuery({
    queryKey: ['recipe'],
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
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (newRecipe) => API.addNewRecipe(newRecipe),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allRecipes'] })
    },
  })
}

export function useFruits() {
  const query = useQuery({ queryKey: ['fruits'], queryFn: getFruits })
  return {
    ...query,
    // Extra queries go here e.g. addFruit: useAddFruit()
  }
}

export function useFruitsMutation<TData = unknown, TVariables = unknown>(
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

// Query functions go here e.g. useAddFruit
/* function useAddFruit() {
  return useFruitsMutation(addFruit)
} */
