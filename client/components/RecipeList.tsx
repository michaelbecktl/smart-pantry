import data from '../../data.json'

function RecipeList() {
  const list = data.foodbank

  return (
    <>
      {list.map((recipe) => {
        return (
          <div key={recipe.name}>
            <img
              className="listthumbnail"
              src={recipe.imgUrl}
              alt={recipe.name}
            />
          </div>
        )
      })}
    </>
  )
}

export default RecipeList
