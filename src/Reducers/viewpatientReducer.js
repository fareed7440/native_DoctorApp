import ActionType from '../actions/Actiontype'


const initialState = {


};
function ViewPatientReducer(state = initialState, action) {
    switch (action.type) {
  case ActionType.VIEW_PATEINTSUCCESS:
   return {... state ,viewPatient:action.data}
 
         default: return state
    }
}
export default ViewPatientReducer;