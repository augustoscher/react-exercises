import { HANDLE_INPUT_FIELD, TOGGLE_CONSENT } from './actionTypes'

type StateProps = {
  username: string
  email: string
  password: string
  hasConsented: boolean
}

type ActionProps = {
  type: string
  field?: string
  payload?: any
}

export const initialState = {
  username: '',
  email: '',
  password: '',
  hasConsented: false
}

const formReducer = (state: StateProps = initialState, action: ActionProps) => {
  switch (action.type) {
    case HANDLE_INPUT_FIELD:
      return {
        ...state,
        ...(action.field ? { [action.field]: action.payload } : {})
      }
    case TOGGLE_CONSENT:
      return {
        ...state,
        hasConsente: !state.hasConsented
      }
    default:
      return state
  }
}

export default formReducer
