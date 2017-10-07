import ActionType from './Actiontype';
import { Actions } from 'react-native-router-flux';
import {
    AsyncStorage
} from 'react-native'
 var arr  = [];
function deletePatientRequst(key) {
    console.log('Action ID' ,key)
    return dispatch => {
      var  arr = [];
        dispatch(DelPatientRequest());
          AsyncStorage.getItem('myKeys', (err, result) => {
       console.log('asyncData',result);
       arr = JSON.parse(result)
       arr.splice(key,1);
       AsyncStorage.setItem('myKeys',JSON.stringify(arr))
  dispatch(DelPatientRequestSuccess(arr))
             })
  
    }
           

}
function DelPatientRequest() {
    return {
        type: ActionType.DEL_PATEINT
    }
}
function DelPatientRequestSuccess(data) {
    return {
        type: ActionType.DEL_PATEINTSUCCESS,
        data
    }
}

export default deletePatientRequst;