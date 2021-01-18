import * as actionTypes from './actionTypes';


const saveResult = (res) => {
      // let updated = res * 3;
//      let  updated = res;
      return {
            type:actionTypes.RESULT,
            result :res
      } 

}

export const result = (res) => {
  
      return (dispatch,getState)  => {
            setTimeout( () => {

                 // console.log("from creater",getState().lists.result);
                  dispatch(saveResult(res));
//
                  //console.log("from creater",getState().lists.result);
            },2000 )
      }

}

export const deleteList = (id) => {
      
      return { 
            type:actionTypes.DELETE,
            Eid :id
      }

}
