import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addNewUser, getUserByAuth } from '../apis/user'
import { NewUser } from '../../models/user'

export function useUserByAuth(id: unknown) {
  const query = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      getUserByAuth(id)
    },
  })
  return query
}

export function useAddUser() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ data, token }: { data: NewUser; token: string }) =>
      addNewUser(data, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
  })
}
