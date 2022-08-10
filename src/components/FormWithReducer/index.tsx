import { useReducer } from 'react'
import { HANDLE_INPUT_FIELD, TOGGLE_CONSENT } from './actionTypes'
import formReducer, { initialState } from './formReducer'

import * as S from './styles'

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

  const handleSubmit = () => {
    console.log(state)
  }

  return (
    <S.Wrapper>
      <S.FormWrapper>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          value={state.username}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleInputChange}
        />
        <label htmlFor="termsOfCondition">Consent terms of conditions:</label>
        <input
          type="checkbox"
          name="termsOfCondition"
          checked={state.hasConsented}
          onChange={() => dispatch({ type: TOGGLE_CONSENT })}
        />
        <button type="button" onClick={handleSubmit}>
          Enviar
        </button>
      </S.FormWrapper>
    </S.Wrapper>
  )
}

export default FormWithReducer
