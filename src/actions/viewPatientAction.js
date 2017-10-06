import ActionType from './Actiontype';
import { Actions } from 'react-native-router-flux';
import {
    AsyncStorage
} from 'react-native'
 var arr  = [];
function viewPatientRequst() {
    return dispatch => {
      var  arr = [];
        dispatch(ViewPatientRequest());
          AsyncStorage.getItem('myKeys', (err, result) => {
       console.log('asyncData',result);
       arr = JSON.parse(result)

        dispatch(ViewPatientRequestSuccess(arr))
             })
  
    }
           

}
function ViewPatientRequest() {
    return {
        type: ActionType.VIEW_PATEINT
    }
}
function ViewPatientRequestSuccess(data) {
    return {
        type: ActionType.VIEW_PATEINTSUCCESS,
        data
    }
}

export default viewPatientRequst;