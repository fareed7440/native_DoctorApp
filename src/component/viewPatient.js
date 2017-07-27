import React, { Component } from 'react';
import {
    AsyncStorage, Text,
    ScrollView
} from 'react-native'
import { Container, Content, Card, Header, Item, Input, Button, CardItem, Icon, Right, ListItem, List, Body } from 'native-base';

var tt = [];

class ViewPatient extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        AsyncStorage.getItem('patient-detail').then((res) =>



            tt.push(JSON.parse(res)),
            console.log('ressss', tt)
        )
    }
    render() {
        // const arr = [];
        const data = this.props && this.props.patient && this.props.patient.PatientRed ? this.props.patient.PatientRed : [];
        console.log('data', data)
        //   arr.push(data)
        console.log('tttttt', tt)



        
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















                    <Text style={{ marginLeft: 120 ,color :'blue',fontSize : 20 }}>Patient Detail</Text>
                    {console.log("far", data)}






                    {
                        data.map((item, i) => {
                            return (
                                 <ScrollView>
                                <Card style={{flex : 1}}>
                                    <CardItem key={i} >
                                        <List >
                                            <ListItem>
                                                <Text >Name:</Text><Text>{item.name}</Text>

                                            </ListItem>
                                            <ListItem>
                                                <Text>Gender:</Text><Text>{item.gender}</Text>

                                            </ListItem>
                                            <ListItem>
                                                <Text>Cost:</Text><Text>{item.cost}</Text>

                                            </ListItem>

                                            <ListItem>
                                                <Text>Date:</Text><Text>{item.date}</Text>
                                            </ListItem>

                                            <ListItem>
                                                <Text>Disease:</Text><Text>{item.disease}</Text>

                                            </ListItem>
                                            <ListItem>
                                                <Text>Medison:</Text><Text>{item.medison}</Text>

                                            </ListItem>

                                        </List>
                                    </CardItem>
                                </Card>

</ScrollView>

                            )
                        })
                    }







                </Content>
            </Container>
        )
    }
}

export default ViewPatient;





