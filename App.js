import React from 'react'
import { View, Text } from 'react-native'
import Route from './src/pages/route';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {observable} from 'mobx'; 

export default class App extends React.Component{

  componentDidMount = async () => {
   AsyncStorage.setItem('application_name',JSON.stringify(['a','b','c']) )  
   const application_name = await AsyncStorage.getItem('application_name');
   console.log(JSON.parse(application_name));
  //  AsyncStorage.getItem('application_name').then((res) => {
  //    console.log(res);  } )
  
} 
  render(){
  return (
    
    <Route/>
  )
}
}
