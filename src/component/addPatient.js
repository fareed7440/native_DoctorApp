import React, { Component } from 'react'
import { Container, Content, Item, Form, Input, Button, Label } from 'native-base';


import {
    Text,
    View,
    TouchableOpacity

} from 'react-native';


class AddPatient extends Component {
    constructor(props) {
        super(props);


        this.state = {
            name: '',
            disease: '',
            medison: '',
            date: '',
            cost: '',
        }
        this.handleFormInput = this.handleFormInput.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }


    handleFormInput = (e) => {
        e.preventDefault();
        let name = this.state.name
        let disease = this.state.disease
        let medison = this.state.medison
        let cost = this.state.cost
        let obj = {
            name: name,
           disease: disease,
           medison: medison,
           cost: cost
        }
        console.log('ggg', obj)
        this.props.PatientReq(obj)
    }

    handleInput = (evt) => {

        this.setState({ value: evt.target.value });
    }



    render() {
        return (

            <Container>
                <Content>
                    <Form onSubmit={this.handleFormInput}>
                        <Item floatingLabel>
                            <Label>Patient name</Label>
                            <Input
                                name='name'
                                ref='name'
                                value={this.state.value}

                                  onChangeText={(name) => this.setState({name})}

                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Disease type</Label>
                            <Input
                                name='disease'
                                ref='disease'
                                value={this.state.value}

                                 onChangeText={(disease) => this.setState({disease})}
   
                            />
                        </Item>
                        <Item floatingLabel >
                            <Label>Provide medison </Label>
                            <Input
                                name='medison'
                                ref='medison'
                                value={this.state.value}

                                onChangeText={(medison) => this.setState({medison})}

                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Cost</Label>
                            <Input
                                name='cost'
                                ref='cost'
                                value={this.state.value}

                                        onChangeText={(cost) => this.setState({cost})}
                            />
                        </Item>
                        <TouchableOpacity >
                            <Button type="submit"
                              onPress={this.handleFormInput}
                                style={{ marginLeft: 150, marginTop: 60 }} bordered>
                                <Text>Submit</Text>
                            </Button>
                        </TouchableOpacity >
                    </Form>
                </Content>
            </Container>


        )

    }
}


export default AddPatient