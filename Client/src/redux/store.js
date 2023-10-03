import { createStore, applyMiddleware } from 'redux' // applyMiddleware es la funcionalidad que nos permitira hacer las consultas a una API externa 
import thunk from 'redux-thunk'; // es el middleware para hacer peticiones por fuera de la aplicacion 
import rootReducer from './reducer';


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;