import React, { Component,useState } from 'react';
import { StyleSheet, SectionList, Text, View, TextInput, Button,TouchableHighlight, Pressable } from 'react-native';
import * as Calendar from 'expo-calendar';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import DropDownPicker from 'react-native-dropdown-picker';
import EventListScreen from './EventListScreen';

const TIME_FORMAT = "DD-MM-YY HH:mm"

class DeleteEventScreen extends Component {
  constructor(props) {
    super(props);
   
  }

  componentDidMount(){
       // (Platform.OS === 'ios' || Platform.OS === 'andoroid')  &&
       Calendar.requestCalendarPermissionsAsync().then(status => console.log({status}) )
       //Calendar.requestPermissionsAsync( ).then(status => console.log({status}) )
       //(Platform.OS === 'ios' || Platform.OS === 'andoroid')  &&
        Calendar.requestRemindersPermissionsAsync().then(status => console.log({status}))
          
  }
   render() {
    return (
      <View >
        <Text> </Text>
        
        <Button title="Delete" />
        <Button title="Cancel" />
      </View>
    );
  }
}

export default DeleteEventScreen;