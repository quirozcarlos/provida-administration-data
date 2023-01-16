import { matchRoutes, useLocation } from "react-router-dom"

const routes = [
  { path: '/' },
  { path: '/bills' },
  { path: '/clients' },
]

export const useCurrentPath = () => {
  const location = useLocation()
  const [{ route }] = matchRoutes(routes, location)

  return route.path
}
