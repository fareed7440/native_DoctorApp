import ActionType from './Actiontype';
import { Actions } from 'react-native-router-flux';
import { 
     AsyncStorage
} from 'react-native'
  const arr = [];

function addPatientRequst(data) {
    console.log('dataaaaaa', data)
     return dispatch => {
        dispatch(PatientRequest());
     arr.push(data)
 //console.log('assss',ass)
    // let ass = JSON.stringify(data) 
 //console.log('asaa',ass)
     AsyncStorage.setItem("patient-detail", JSON.stringify(arr) ).then((value)=>{
      arr : value
 dispatch(PatientRequestSuccess(arr));
 alert('Detail submit success')
 Actions.home()

     })
     AsyncStorage.getItem('patient-detail').then((res) =>
     
    console.log('ressss',res)
   
     )
    
    
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