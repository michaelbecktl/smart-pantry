import { useQuery } from '@tanstack/react-query'
import * as API from '../apis/price.ts'

export function usePrice(recipeId: number) {
  return useQuery({
    queryKey: ['price'],
    queryFn: () => API.getAllPrice(recipeId),
  })
}
