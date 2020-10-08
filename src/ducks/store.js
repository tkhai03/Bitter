import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducer'
console.log(reducer)





export default createStore( reducer, composeWithDevTools())