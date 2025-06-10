import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getAllMyRecipes, getRecipeDetails } from '../apis/recipe.ts'

export function useAllMyRecipes(id: string) {
  return useQuery({
    queryKey: ['myrecipe'],
    queryFn: () => getAllMyRecipes(id),
  })
}

export function useRecipeDetails(name: string, id: number) {
  return useQuery({
    queryKey: ['recipe'],
    queryFn: () => getRecipeDetails(name, id),
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
