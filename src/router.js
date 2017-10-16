import React,{Component} from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux';
import Home from './component/home'
import PatientCon from './container/addPatient'
import ViewPatientCon from './container/viewpatient'



class Routing extends Component{
    render(){
        return(
            <Router titleStyle={{alignSelf:'center'}} > 

<Scene key = "home">
       <Scene key="home" component={Home} hideNavBar = {true} />
         <Scene key="addPatient" component={PatientCon} title = 'Add Patient Detail' hideNavBar = {false} />
           <Scene key="viewpatient" component={ViewPatientCon} title = 'View Patient Detail' hideNavBar = {false} />
            </Scene>


            </Router>

        )
    }
}



export default Routing;