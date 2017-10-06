import ActionType from './Actiontype';
import { Actions } from 'react-native-router-flux';
import {
    AsyncStorage
} from 'react-native'
function addPatientRequst(data) {
    console.log('dataaaaaa', data)
    return dispatch => {
        dispatch(PatientRequest());
       var storageValue = []
            var emptyArr = JSON.stringify([])
            var userData = data
            AsyncStorage.getItem('myKeys').then((value)=>{
            if(value === null || value === undefined){
                AsyncStorage.setItem('myKeys',emptyArr)
            }
            })
            AsyncStorage.getItem('myKeys').then((value)=>{
                storageValue = JSON.parse(value)
                storageValue.push(userData)
                storageValue = JSON.stringify(storageValue)
                   console.log('myKeys',storageValue )
                AsyncStorage.setItem('myKeys',storageValue)
             
            })
            dispatch(PatientRequestSuccess(storageValue))
            
    }

}
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