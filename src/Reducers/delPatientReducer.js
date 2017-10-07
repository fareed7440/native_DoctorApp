import ActionType from '../actions/Actiontype'


const initialState = {
    isLoaded : false
};
function DelPatientReducer(state = initialState, action) {
    switch (action.type) {
  case ActionType.DEL_PATEINTSUCCESS:
   return {... state ,delete:action.data,isLoaded : true,}
 
         default: return state
    }
}
export default DelPatientReducer;