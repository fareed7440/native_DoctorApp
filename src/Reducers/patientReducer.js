import ActionType from '../actions/Actiontype'


const initialState = {};
function AddPatientReducer(state = initialState, action) {
    switch (action.type) {
  case ActionType.ADD_PATEINTSUCCESS:
   return {... state ,PatientRed:action.data}
 
         default: return state
    }
}
export default AddPatientReducer;