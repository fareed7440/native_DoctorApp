import React,{Component} from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux';
import Home from './component/home'
import PatientCon from './container/addPatient'




class Routing extends Component{
    render(){
        return(
            <Router > 

<Scene key = "home">
       <Scene key="home" component={Home} hideNavBar = {true} />
         <Scene key="addPatient" component={PatientCon} title = 'Add Patient Detail' hideNavBar = {false} />
            </Scene>


            </Router>

        )
    }
}



export default Routing;