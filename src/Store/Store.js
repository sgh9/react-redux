import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import listReducer from './reducers/listReducer';
import resultReducer from './reducers/resultReducer';
import thunk from 'redux-thunk';


const rootReducer  = combineReducers({
      lists :listReducer,
      ctr : resultReducer
});

const logger = store => {

return next => {
      return action => {
            console.log("middelware",action);
            const result = next(action);
            console.log("middleware next state",store.getState().lists.result);
            return result;

      }   
} 

} 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger,thunk) ));

store.subscribe(() => {
      // console.log("value",store.getState());
})


// store.dispatch({

//       type:"ADD",
//       payload:1

// })


// store.dispatch({

//       type:"SUB",
//       payload:-1

// })



 export default store;