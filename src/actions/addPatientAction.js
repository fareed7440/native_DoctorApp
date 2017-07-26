import ActionType from './Actiontype';
import { 
     AsyncStorage
} from 'react-native'
  
function addPatientRequst(data) {
    console.log('dataaaaaa', data)
     var string = [];
 
     return dispatch => {
        dispatch(PatientRequest());
     string.push(data)
 //console.log('assss',ass)
     let ass = JSON.stringify(string) 
 console.log('asaa',ass)
     AsyncStorage.setItem("patient-detail", ass).then((value)=>{
      
dispatch(PatientRequestSuccess(ass));
     })
     
    
  //console.log('saveeddd',ass)



       




    }}
  

function PatientRequest() {
    return {
        type: ActionType.ADD_PATEINT
    }
}
function PatientRequestSuccess(data) {
    return {
        type: ActionType.ADD_PATEINTSUCCESS,
        data
    }
}

export default addPatientRequst;