import React, { Component } from 'react';
import {
    AsyncStorage, Text,
    ScrollView, StyleSheet
} from 'react-native'
import { Container, Content, Card, Header, Item, Input, Button, CardItem, Icon, Right, ListItem, List, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';


class ViewPatient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mydata: '',
            searchValue : ''
        }
        this.onRemove = this.onRemove.bind(this)
    }


    componentDidMount() {
        this.props.viewPatientData()
        //     AsyncStorage.getItem('myKeys', (err, result) => {
        //   console.log('asyncData',result);
        //          })
    }
    onRemove(index) {
        console.log('onclick Delete Key',index)
        this.props.delId(index);
        alert('deleted')
 Actions.home();
         //this.props.viewPatientData()
       //this.props.delete()
    }
    onSearch(object){

        return object.name.search(this.state.searchValue )>=0 || object.date.search(this.state.searchValue)>=0

    }
//     componentWillReceiveProps(nextProps) {
//     console.log('componentWillReceiveProps', nextProps);
//     if(this.props.delete.isLoaded == true){
//        // Actions.refresh();
        

//     }
// }



    render() {
        const data = this.props.view && this.props.view.viewPatient ? this.props.view.viewPatient : []
       // const searching = this.props.view.viewPatient.filter()
        console.log('datatatat', data)
        return (
            <Container style={styles.container}>
                <Content>

                    <Header searchBar rounded>
                        <Item>
                            <Icon name="ios-search" />
                            <Input placeholder="Search"
                            
                            onChangeText ={(value)=> this.setState({searchValue:value})}
                            
                             />
                            <Icon name="ios-people" />
                        </Item>
                        <Button >
                            <Text>Search</Text>
                        </Button>
                    </Header>




                    {
                        data.filter(this.onSearch.bind(this)).map((v, index) => {
                            return (
                                <Card key={index}>
                                    <CardItem style={styles.cardItem}>

                                        <Text>Name:{' '}{' '}{v.name},{' '}{' '}</Text>
                                        <Text>Gender:{' '}{' '}{v.gender},{' '}{' '}</Text>
                                        <Text>Disease:{' '}{' '}{v.disease},{' '}{' '}</Text>
                                    </CardItem>
                                    <CardItem style={styles.cardItem}>
                                        <Text>Age:{' '}{' '}{v.age},{' '}{' '}</Text>
                                        <Text>Date:{' '}{' '}{v.date},{' '}{' '}</Text>
                                        <Text>Cost:{' '}{' '}{v.cost},{' '}{' '}</Text>
                                    </CardItem>
                                     <Button transparent onPress={() => this.onRemove(index)}>
                        <Icon  style={{ marginLeft: 280 }} name="trash" />
                      </Button>
                                   
                                </Card>
                            )
                        })}
                </Content>
            </Container>
        )
    }

}
export default ViewPatient;


const styles = StyleSheet.create({

    cardItem: {
 alignItems: 'center',
   
    },
container:{
    top: '-1%',
   marginLeft:'1%',
    marginTop:'1%',
    marginRight:'1%',
   padding: '2%',
    backgroundColor: '#499967',
    borderRadius:5,
    opacity: 0.9
}

})







