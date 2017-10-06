import React, { Component } from 'react';
import {
    AsyncStorage, Text,
    ScrollView, StyleSheet
} from 'react-native'
import { Container, Content, Card, Header, Item, Input, Button, CardItem, Icon, Right, ListItem, List, Body } from 'native-base';



class ViewPatient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mydata: ''
        }
        this.onRemove = this.onRemove.bind(this)
    }


    componentDidMount() {
        this.props.viewPatientData()
        //     AsyncStorage.getItem('myKeys', (err, result) => {
        //   console.log('asyncData',result);
        //          })
    }
    onRemove(name) {
        console.log('hahahhaha',name)
        this.props.delId(name);
       //this.props.delete()
    }



    render() {
        const data = this.props.view && this.props.view.viewPatient ? this.props.view.viewPatient : []
        console.log('datatatat', data)
        return (
            <Container>
                <Content>

                    <Header searchBar rounded>
                        <Item>
                            <Icon name="ios-search" />
                            <Input placeholder="Search" />
                            <Icon name="ios-people" />
                        </Item>
                        <Button >
                            <Text>Search</Text>
                        </Button>
                    </Header>




                    {
                        data.map((v, key) => {
                            console.log('vvvvv', v)
                            return (
                                <Card key={key}>
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
                                     <Button transparent onPress={() => this.onRemove(v.name)}>
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
        // flexDirection: 'column',
        // width: window.width * 0.95,
        // alignSelf: 'center',
        alignItems: 'center',
        // justifyContent: 'center',
        // shadowOpacity: 10,
        // shadowColor: 'grey',
        // backgroundColor: '#EEEEEE',
        // margin: 2
    },

})







