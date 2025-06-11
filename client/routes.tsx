/* eslint-disable react/jsx-key */
import { createRoutesFromElements, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import RecipeView from './pages/RecipeView'
import MyRecipeList from './pages/MyRecipeList'
import ProfilePage from './pages/ProfilePage'
import RecipeList from './pages/RecipeList'
import AddRecipe from './pages/AddRecipe'

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/myrecipes" element={<MyRecipeList />} />
    <Route path="/recipeslist" element={<RecipeList />} />
    <Route path="/recipe/:name/:id" element={<RecipeView />} />
    <Route path="/newrecipe" element={<AddRecipe />} />
    <Route path="/profile" element={<ProfilePage />} />
  </Route>,
)

export default routes
