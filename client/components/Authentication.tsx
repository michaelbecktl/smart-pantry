import { useAuth0 } from '@auth0/auth0-react'

const useIsAuthenticated = () => {
  return useAuth0().isAuthenticated
}
interface Props {
  children: React.ReactNode
}
export function IfAuthenticated(props: Props) {
  const children = props.children
  return useIsAuthenticated() ? <>{children}</> : null
}

export function IfNotAuthenticated(props: Props) {
  const children = props.children
  return !useIsAuthenticated() ? <>{children}</> : null
}
