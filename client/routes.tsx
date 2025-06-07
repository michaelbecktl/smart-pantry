/* eslint-disable react/jsx-key */
import { createRoutesFromElements, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import RecipeView from './pages/RecipeView'
import MyRecipeList from './pages/MyRecipeList'

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/recipelist/u/:id" element={<MyRecipeList />} />
    <Route path="/recipelist/:name/:id" element={<RecipeView />} />
  </Route>,
)

export default routes
