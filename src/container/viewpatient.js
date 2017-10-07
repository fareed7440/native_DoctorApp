//import AddPatient from '../component/addPatient'
import { connect } from 'react-redux'
//import addPatientRequst from '../actions/addPatientAction'
import ViewPatient from '../component/viewPatient'
import  viewPatientRequst from '../actions/viewPatientAction'
import deletePatientRequst from '../actions/deletePatientAction'

function mapStateToProps(state) {
    console.log('state', state)
    return{
       view : state.viewPatient,
       delete : state.delete,
    }
}

function mapDispatchToProps(dispatch) {
    return {
viewPatientData: (data) => dispatch(viewPatientRequst(data)),
delId: (key) => dispatch(deletePatientRequst(key)),

    }

}

const ViewPatientCon = connect(mapStateToProps, mapDispatchToProps)(ViewPatient)

export default ViewPatientCon;