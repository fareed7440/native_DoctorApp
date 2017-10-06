import ActionType from '../actions/Actiontype'


const initialState = {};
function DelPatientReducer(state = initialState, action) {
    switch (action.type) {
  case ActionType.DEL_PATEINTSUCCESS:
   return {... state ,delete:action.data}
 
         default: return state
    }
}
export default DelPatientReducer;