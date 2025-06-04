import { useNavigate } from 'react-router'
// import { Meal } from '../../models/foodbank'
import { ChangeEvent, FormEvent, useState } from 'react'
// import { useCreateMeal } from '../apiClient'

const empty = {
  name: '',
  ingredients: [],
  method: [],
  imgUrl: '',
} as Meal

function NewMeal() {
  const createMeal = useCreateMeal() // Custom Hook Required Here //
  const navigate = useNavigate()

  const [formState, setFormState] = useState(empty)
  const [tempIngredients, setTempIngredients] = useState('') // To add ingredients
  const [tempMethods, setTempMethods] = useState('') // To add methods

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // Wait for custom hook to complete //
    if (createMeal.isPending) {
      return <p>Meal is being uploaded...</p>
    }
    // if createMeal is complete, navigate to the new meal's page //
    const { name } = await createMeal.mutateAsync(formState)
    navigate(`/meal/${name}`)
  }

  //handleChange keeps track of the state of our form
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.currentTarget
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  // Ingredients form //

  function handleIngredients(event: ChangeEvent<HTMLInputElement>) {
    setTempIngredients(event.target.value)
  }

  function submitIngredients(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const newIngredients = [...formState.ingredients, tempIngredients]
    setFormState({ ...formState, ingredients: newIngredients })
    setTempIngredients('')
  }

  // Methods form //

  function handleMethods(event: ChangeEvent<HTMLInputElement>) {
    // Ingredients form
    setTempMethods(event.target.value)
  }

  function submitMethods(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    const newMethods = [...formState.method, tempMethods]
    setFormState({ ...formState, method: newMethods })
    setTempMethods('')
  }

  function handleDeleteIngredients(item: string) {
    // This allows users to delete an ingredient that was added to the template
    const newList = formState.ingredients.filter(
      (ingredient) => ingredient !== item,
    )
    setFormState({ ...formState, ingredients: newList })
  }

  function handleDeleteMethods(item: string) {
    // This allows users to delete an ingredient that was added to the template
    const newList = formState.method.filter((step) => step !== item)
    setFormState({ ...formState, method: newList })
  }

  return (
    <div
      style={{
        display: 'flex',
        width: '65vw',
        justifyContent: 'space-between',
        marginLeft: '17.5vw',
        marginTop: '10vh',
      }}
    >
      <form
        style={{
          backgroundColor: 'gray',
          display: 'flex',
          flexDirection: 'column',
          width: '30vw',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '40vh',
          padding: '3vh',
          borderRadius: '1vw',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <label
            htmlFor="name"
            style={{
              fontWeight: 'bold',
              fontSize: '1.2rem',
              marginBottom: '10px',
            }}
          >
            Name:
          </label>
          <input
            style={{
              paddingRight: '40px',
              paddingLeft: '20px',
              height: '50px',
              width: '20vw',
              borderRadius: '2vw',
              fontSize: '1vw',
            }}
            name="ingredients"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <label
            htmlFor="ingredients"
            style={{
              fontWeight: 'bold',
              fontSize: '1.2rem',
              marginBottom: '10px',
            }}
          >
            Add New Ingredients:
          </label>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <input
              style={{
                paddingRight: '40px',
                paddingLeft: '20px',
                height: '50px',
                width: '20vw',
                borderRadius: '2vw',
                fontSize: '1vw',
              }}
              name="ingredients"
              value={tempIngredients}
              onChange={handleIngredients}
            />
            <button
              onClick={submitIngredients}
              style={{
                height: '40px',
                borderRadius: '2vw',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                position: 'absolute',
                top: '5px',
                right: '10px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: 'black',
                color: 'white',
                fontSize: '20px',
                fontWeight: 'bold',
              }}
            >
              Add
            </button>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <label
            htmlFor="method"
            style={{
              fontWeight: 'bold',
              fontSize: '1.2rem',
              marginBottom: '10px',
            }}
          >
            Add New Methods:
          </label>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <input
              style={{
                paddingRight: '40px',
                paddingLeft: '20px',
                height: '50px',
                width: '20vw',
                borderRadius: '2vw',
                fontSize: '1vw',
              }}
              name="method"
              value={tempMethods}
              onChange={handleMethods}
            />
            <button
              onClick={submitMethods}
              style={{
                height: '40px',
                borderRadius: '2vw',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                position: 'absolute',
                top: '5px',
                right: '10px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: 'black',
                color: 'white',
                fontSize: '20px',
                fontWeight: 'bold',
              }}
            >
              Add
            </button>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <label
            htmlFor="name"
            style={{
              fontWeight: 'bold',
              fontSize: '1.2rem',
              marginBottom: '10px',
            }}
          >
            Image:
          </label>
          <input
            style={{
              paddingRight: '40px',
              paddingLeft: '20px',
              height: '50px',
              width: '20vw',
              borderRadius: '2vw',
              fontSize: '1vw',
            }}
            name="ingredients"
            name="imgUrl"
            value={formState.imgUrl}
            onChange={handleChange}
          />
        </div>
        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: 'white',
            fontSize: '1vw',
            fontWeight: 'bold',
            padding: '0.5vw',
            borderRadius: '20px',
            cursor: 'pointer',
            marginTop: '20px',
          }}
        >
          Upload New Meal
        </button>
      </form>
      <div
        style={{
          backgroundColor: 'gray',
          display: 'flex',
          flexDirection: 'column',
          width: '30vw',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '70vh',
          padding: '5vh',
          borderRadius: '1vw',
        }}
      >
        <h2 style={{ fontWeight: 'bold', fontSize: '3rem' }}>Meal Template</h2>
        <h1
          style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '20px' }}
        >
          Name: {formState.name}
        </h1>
        <div style={{ textAlign: 'center', width: '50%' }}>
          <h1
            style={{
              fontWeight: 'bold',
              fontSize: '1.2rem',
              marginBottom: '10px',
            }}
          >
            Ingredients:
          </h1>
          <ul>
            {formState.ingredients.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'space-between',
                    marginTop: '20px',
                  }}
                >
                  <li
                    style={{
                      fontWeight: 'bold',
                      fontSize: '20px',
                      marginRight: '20px',
                    }}
                  >
                    {item}
                  </li>
                  <button
                    onClick={() => handleDeleteIngredients(item)}
                    style={{
                      height: '40px',
                      borderRadius: '2vw',
                      padding: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      border: 'none',
                      cursor: 'pointer',
                      backgroundColor: 'black',
                      color: 'white',
                      fontSize: '20px',
                      fontWeight: 'bold',
                    }}
                  >
                    Remove
                  </button>
                </div>
              )
            })}
          </ul>
        </div>
        <div style={{ textAlign: 'center', width: '50%' }}>
          <h1
            style={{
              fontWeight: 'bold',
              fontSize: '1.2rem',
              marginBottom: '10px',
            }}
          >
            Methods:
          </h1>
          <ul>
            {formState.method.map((steps, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'space-between',
                    marginTop: '20px',
                  }}
                >
                  <li
                    style={{
                      fontWeight: 'bold',
                      fontSize: '20px',
                      marginRight: '20px',
                    }}
                  >
                    {steps}
                  </li>
                  <button
                    onClick={() => handleDeleteMethods(item)}
                    style={{
                      height: '40px',
                      borderRadius: '2vw',
                      padding: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      border: 'none',
                      cursor: 'pointer',
                      backgroundColor: 'black',
                      color: 'white',
                      fontSize: '20px',
                      fontWeight: 'bold',
                    }}
                  >
                    Remove
                  </button>
                </div>
              )
            })}
          </ul>
        </div>
        <div>
          <img src={formState.imgUrl} alt="Meal submission" />
        </div>
      </div>
    </div>
  )
}

export default NewMeal
