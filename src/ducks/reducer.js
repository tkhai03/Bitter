import axios from 'axios'

const initialState = {
    email: '',
    username:'',
    id: 0
}
//Action constraints
const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const GET_USER = 'GET_USER'
//Action creators - functions to perform actions
export function loginUser(user){
    return {
        type: LOGIN_USER,
        payload: user,
    }
}

export function logoutUser(){
    return {
        type:LOGOUT_USER,
        payload: null,
    }
}

export function getUser(){
    const payload = axios.get('/auth/user')
    return{
        type: GET_USER,
        payload: payload,
    }
}

//Reducer Function - changes state
export default function (state = initialState, action) {
    switch (action.type) {
      case LOGIN_USER:
          const {username, id} = action.payload
        return { username, id}
      case LOGOUT_USER:
        return initialState
      case GET_USER + '_PENDING':
        return { ...state }
      case GET_USER + '_FULFILLED':
        return { ...state, username: action.payload.username, id: action.payload.id }
      case GET_USER + '_REJECTED':
        return initialState
      default:
        return initialState
    }
  }