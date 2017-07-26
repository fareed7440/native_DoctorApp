import ReduxThunk from 'redux-thunk';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import firebase from 'firebase'
import indexReducers from './Reducers/reducers';
import Routing from './router';

class App extends Component {
    // componentWillMount() {
    //     var config = {
    //         apiKey: 'AIzaSyDShQMknRD8DZpxYKcguFwEtrBnE7q3rXA',
    //         authDomain: 'manager-5108d.firebaseapp.com',
    //         databaseURL: 'https://manager-5108d.firebaseio.com',
    //         projectId: 'manager-5108d',
    //         storageBucket: 'manager-5108d.appspot.com',
    //         messagingSenderId: '732126589453'
    //     };
    //     firebase.initializeApp(config); 
    // }
    render() {
        const store = createStore(indexReducers,{}, applyMiddleware(ReduxThunk)); 
        return (
            <Provider store={store}>
                    <Routing />
            </Provider>
        );
    };
}

export default App;