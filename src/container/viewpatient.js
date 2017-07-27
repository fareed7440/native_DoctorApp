//import AddPatient from '../component/addPatient'
import { connect } from 'react-redux'
//import addPatientRequst from '../actions/addPatientAction'
import ViewPatient from '../component/viewPatient'

function mapStateToProps(state) {
    console.log('state', state)
    return{
       patient : state.AddPatientReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {


    }

}

const ViewPatientCon = connect(mapStateToProps, mapDispatchToProps)(ViewPatient)

export default ViewPatientCon;