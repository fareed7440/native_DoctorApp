import React, { Component } from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, CardItem } from 'native-base';
import { Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
class Home extends Component {


    render() {
        return (
            <Container>
                <Header >
                    <Left>
                        <Button transparent>
                            <TouchableOpacity >
                                <Icon active name='menu' />
                            </TouchableOpacity >
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ marginLeft: 35 }}>Doctor App</Title>
                    </Body>
                    <Right >
                        <TouchableOpacity >
                            <Icon active name='md-medkit' style={{ color: 'red' }} />
                        </TouchableOpacity >

                    </Right>
                </Header>



                <CardItem cardBody>
                    <Image source={{ uri: 'https://thumbs.dreamstime.com/z/welcome-sign-showing-hello-greeting-hospitality-29397629.jpg' }} style={{ height: 470, width: null, flex: 1 }} />
                </CardItem>
                <TouchableOpacity >
                    <Button full   onPress={()=>Actions.addPatient()}>
                        <Text>Add patient</Text>
                    </Button>
                </TouchableOpacity>
            </Container>

        )
    }
}

export default Home;