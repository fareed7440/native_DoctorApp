import { combineReducers } from 'redux';
import AddPatientReducer from  './patientReducer'
import ViewPatientReducer from './viewpatientReducer'
import DelPatientReducer from './delPatientReducer'
const indexReducers = combineReducers(
    {
  patient :   AddPatientReducer,
   viewPatient : ViewPatientReducer,
   delete : DelPatientReducer


    }
);
export default indexReducers;