import React, { Component } from 'react'
import { Container, Content, Item, Form, Input, Button, Label, Picker , Card} from 'native-base';
import DatePicker from 'react-native-datepicker'
import { Actions } from 'react-native-router-flux';


import {
    Text,
    View,
    TouchableOpacity,
    AsyncStorage

} from 'react-native';


class AddPatient extends Component {
    constructor(props) {
        super(props);


        this.state = {
    
           date: new Date(),
            name: '',
            disease: '',
            medison: '',
            cost: '',
            age: '',
            gender: "Gender"
        }
        this.handleFormInput = this.handleFormInput.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }


    handleFormInput = (e) => {
        e.preventDefault();


//  const month = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov"];
//         const getmonth = this.state.sdate.getMonth();
//         const months = month[getmonth];
  let date = this.state.date.getDate() + " /" + this.state.date.getMonth() + "/" + this.state.date.getFullYear();


        let name = this.state.name
        let disease = this.state.disease
        let medison = this.state.medison
        let cost = this.state.cost
        let age = this.state.age
        // let date = this.state.date
        let gender = this.state.gender
        let obj = {
            name: name,
            disease: disease,
            medison: medison,
            cost: cost,
            gender: gender,
            age: age,
             date: date
        }
       
      
        this.props.PatientReq(obj);
         Actions.home()
    }

    handleInput = (evt) => {

        this.setState({ value: evt.target.value });
    }

    onValueChange5(value, string) {
        this.setState({
            gender: value
        });
    }

    render() {
        return (

            <Container>
                <Content>
                    <Card style={{flex : 1}}>
                    <Form onSubmit={this.handleFormInput}>
                        <Item floatingLabel>
                            <Label>Patient name</Label>
                            <Input
                                name='name'
                                ref='name'
                                value={this.state.value}

                                onChangeText={(name) => this.setState({ name })}

                            />
                        </Item>





                        <Picker
                        style={{marginTop:18}}
                            placeholder='sdkaskd'
                            mode="dropdown"
                            place
                            name='selected5'
                            ref='selected5'
                            selectedValue={this.state.gender}
                            onValueChange={this.onValueChange5.bind(this)}

                            onChangeText={(gender) => this.setState({ gender })}
                        >
                            <Item label="Gender" value="Gender" />
                            <Item label="male" value="male" />
                            <Item label="female" value="female" />

                        </Picker>
                        <Item floatingLabel>
                            <Label>age</Label>
                            <Input
                             style={{marginTop:-10}}
                                maxLength={3}
                                keyboardType='numeric'

                                name='age'
                                ref='age'
                                value={this.state.value}

                                onChangeText={(age) => this.setState({ age })}

                            />
                        </Item>

                        <Item floatingLabel>
                            <Label>Disease type</Label>
                            <Input
                                name='disease'
                                ref='disease'
                                value={this.state.value}

                                onChangeText={(disease) => this.setState({ disease })}

                            />
                        </Item>
                        <Item floatingLabel >
                            <Label>Provide medison </Label>
                            <Input
                                name='medison'
                                ref='medison'
                                value={this.state.value}

                                onChangeText={(medison) => this.setState({ medison })}

                            /></Item>

                        <DatePicker
                            style={{ width: 350, marginTop: 20 }}
                            date={this.state.date}
                            mode="date"


                            placeholder="select date"
                            format="YYYY.DD.MM"
                            minDate={new Date()}
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            value={this.state.value}
                            onDateChange={(date) => { this.setState({ date: date }) }}
                        />



                        <Item floatingLabel>
                            <Label>Cost</Label>
                            <Input
                                keyboardType='numeric'

                                name='cost'
                                ref='cost'
                                value={this.state.value}

                                onChangeText={(cost) => this.setState({ cost })}
                            />
                        </Item>
                        <TouchableOpacity >
                            <Button type="submit"
                                onPress={this.handleFormInput}
                                style={{ marginLeft: 150, marginTop: 20 }} bordered>
                                <Text>Submit</Text>
                            </Button>
                        </TouchableOpacity >
                    </Form>
                    </Card>
                </Content>
            </Container>


        )

    }
}


export default AddPatient