import AddPatient from '../component/addPatient'
import { connect } from 'react-redux'
import addPatientRequst from '../actions/addPatientAction'


function mapStateToProps(state) {
    console.log('state', state)
    return{
       patient : state.AddPatientReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {

PatientReq: (data) => dispatch(addPatientRequst(data)),
    }

}

const PatientCon = connect(mapStateToProps, mapDispatchToProps)(AddPatient)

export default PatientCon;