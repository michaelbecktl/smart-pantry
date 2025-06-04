/* eslint-disable react/jsx-key */
import { createRoutesFromElements, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import RecipeList from './pages/RecipeList'
import RecipeView from './pages/RecipeView'

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/recipelist" element={<RecipeList />} />
    <Route path="/recipelist/:name" element={<RecipeView />} />
  </Route>,
)

export default routes
