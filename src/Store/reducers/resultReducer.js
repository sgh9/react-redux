
import * as actionTypes from '../actions/actionTypes';

import {updatedObject} from '../utility';

const initialState = {
 
      add : 10
};

const resultReducer = (state = initialState ,
      action) => {

      switch (action.type) {
            case actionTypes.INCREMENT:
                  return updatedObject (state,{add: state.add + 1});
            case actionTypes.DECREMENT:
                  return updatedObject (state,{add: state.add - 1});
            case actionTypes.ADDITION :
                  return updatedObject (state,{ add: state.add + action.payload.value});
            case actionTypes.SUBSTRACTION:
                  return updatedObject (state,{ add: state.add - action.payload.value});     
     
          default:
            return state;
            }

      
}

export default resultReducer;
