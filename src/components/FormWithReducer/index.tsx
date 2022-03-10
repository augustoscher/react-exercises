import { useReducer } from 'react'
import { HANDLE_INPUT_FIELD, TOGGLE_CONSENT } from './actionTypes'
import formReducer, { initialState } from './formReducer'

const FormWithReducer = () => {
  const [state, dispatch] = useReducer(formReducer, initialState)

  //check correct type here
  const handleInputChange = (e: any) => {
    dispatch({
      type: HANDLE_INPUT_FIELD,
      field: e.target.name,
      payload: e.target.value
    })
  }

  return (
    <form>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={state.username}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Consent terms of conditions:
        <input
          type="checkbox"
          name="termsOfCondition"
          checked={state.hasConsented}
          onChange={() => dispatch({ type: TOGGLE_CONSENT })}
        />
      </label>
    </form>
  )
}

export default FormWithReducer
