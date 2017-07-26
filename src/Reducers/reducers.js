import { combineReducers } from 'redux';
import AddPatientReducer from  './patientReducer'
const indexReducers = combineReducers(
    {
    AddPatientReducer
    }
);
export default indexReducers;