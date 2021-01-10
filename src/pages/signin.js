import React from 'react'
import { View, Text, StyleSheet, SafeAreaView,Image,TextInput,TouchableOpacity,ScrollView } from 'react-native'
import { color } from 'react-native-reanimated'

import Add from './Add';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Formik } from 'formik'
import * as yup from 'yup'

export default class signin extends React.Component{
  constructor(){
    super();
      this.state ={
        hidepassword:true
      }
    }
  

  _handleSubmit = () =>{
    alert('post edildi');
  };  

  render() {
  return (
     <ScrollView>
    <SafeAreaView style={style.body}>
      <View style={style.header}>
        <Text style={style.Text}>Sıgn In</Text>
      </View>
      <View style={style.logo}>
         <Image source={require('../../assets/Illustration.png')} />
      </View>
      <View style={style.board}>
        <Formik  
          initialValues={{
            username:'',
            password:'',}}
          onSubmit={this._handleSubmit}
          validationSchema={yup.object().shape({
               username:yup.string().required("Kullanıcı adı gereklidir"),
               password:yup.string().required("Şifre gereklidir")
          })} >
            {({ values,handleSubmit,handleChange,errors }) => (
                <View>      
                  <View style={style.Item}>
                    <TextInput
                        value={values.username}
                        onChangeText={handleChange('username')} 
                        placeholder={"Kullanıcı Adı"}
                        style={style.Input}/>
                        {(errors.username) && <Text style={{color:'red'}}>{errors.username }</Text>}
                  </View>
                  <View style={style.Item}>
                    <TextInput
                        secureTextEntry={this.state.hidepassword}
                        value={values.password}
                        onChangeText={handleChange('password')} 
                        placeholder={"Şifre"}
                        style={style.Input}/>
                        {(errors.password) && <Text style={{color:'red'}}>{errors.password}</Text>}
                    <TouchableOpacity onPress={()=> this.setState({hidepassword:!this.state.hidepassword})} style={{ position:'absolute', right:10, top:12}}>
                      <Icon name={(this.state.hidepassword) ? "eye-slash" :'eye'} size={25}/>
                    </TouchableOpacity>
                  </View>
                  <View style={{flexDirection:'row',justifyContent:'flex-end',marginTop:10}}>
                    <TouchableOpacity>
                    <Text style={{color:'#838391', fontSize:15}}>Şifreni mi unuttun</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={style.Item}>
                    <TouchableOpacity
                    onPress={handleSubmit} 
                    style={style.button}>
                      <Text  style={{color:'#fff',fontSize:15,fontWeight:'700'}}>Login</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                  ) 
                }
        </Formik>
          <View style={[style.Item,{justifyContent:'center',alignItems:'center'}]}>
            <Text style={{color:'#838391',fontSize:17}}>
               or
            </Text>
          </View>
          <View style={style.social}>
            <TouchableOpacity style={style.social_item}>
              <Icon name={"facebook"} color={'#3b5999'} size={20}/>
            </TouchableOpacity>
            <TouchableOpacity style={style.social_item}>
             <Icon name={'linkedin'} color={"#0077B5"} size={20}/>
            </TouchableOpacity>
            <TouchableOpacity style={style.social_item}>
              <Icon name={'twitter-square'} color={"#55acee"} size={20}/>
            </TouchableOpacity>
          </View>
          <View style={style.account}>
            <Text style={style.signup}>Don’t have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Add')}>
            <Text style={style.up}>Sign Up</Text>
            </TouchableOpacity>
          </View>
      </View>
    
    </SafeAreaView>

    </ScrollView>
  )
  }
}

const style = StyleSheet.create({
 
  body:{
    backgroundColor:'white',
    flex: 1,
  },
  header:{
    padding:20,
    justifyContent: 'center',
    alignItems:'center'
  },
  Text:{
    fontWeight:'500',
    fontSize:20,
    fontFamily:'Gilroy-SemiBold',
    color:'#525464'
  },
  logo:{
    alignItems:'center',
    marginTop:30
  },
  board:{
    marginTop:50,
    paddingHorizontal:30
    
  },
  Item:{
     marginTop:15
  },
  Input:{
    backgroundColor:'#F7F7F7',
    borderColor:'#B0B0C3',
    borderWidth:1,
    paddingVertical:10,
    paddingHorizontal:30  
  },
  button:{
    backgroundColor:'#20C3AF',
    paddingVertical:20,
    justifyContent:'center',
     alignItems:'center'
  },
  social:{
   flexDirection:'row',
   justifyContent:'space-between',
   marginTop:15,  
  },
  social_item:{
    padding: 10,
    width:100,
    height:60,
    borderWidth:1,
    borderColor:'#4CF25555',
    alignItems: 'center',
  },
  account:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:15
  },

  signup:{
    fontSize:17,
    color:'#838391'
  },
  up:{
    color:'#FFB19D',
    fontSize:17,

  }




})