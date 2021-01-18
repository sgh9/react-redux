
import * as actionTypes from '../actions/actionTypes';



const initialState = {
     
      result :[]
};


const listReducer = (state = initialState ,
      action) => {

      switch (action.type) {
       
            case actionTypes.RESULT:
                  return {
                        ...state,
                        result: state.result.concat({
                              id: Math.random()*10000,
                              value: action.result
                        })
                  };
            case actionTypes.DELETE:


                  let updatedArray = state.result.filter((item) =>
                   (item.id !== action.Eid));

                  return {
                        ...state,
                        result: updatedArray
                  };
                  default:
                        return state;
                  
          
      }

      
}

export default listReducer;
