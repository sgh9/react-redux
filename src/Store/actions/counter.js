import * as actionTypes from './actionTypes';

export const increment = () => {

      return {
            type : actionTypes.INCREMENT
      }
}

export const decrement = () => {
      
      return {
            type :actionTypes.DECREMENT
      }
}

export const add = () => {
      
      return {
            type :actionTypes.ADDITION,
            payload : {
                  value:10 
            }

      }
}

export const substraction = () => {
      
      return {
            type :actionTypes.SUBSTRACTION,
            payload : {
                  value:10 
            }

      
      }
}