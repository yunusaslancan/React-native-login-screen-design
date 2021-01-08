import React from 'react'
import { View, Text, StyleSheet, SafeAreaView,Image,TextInput,TouchableOpacity,ScrollView } from 'react-native'
import { color } from 'react-native-reanimated'
import Add from './Add';
import { createStackNavigator } from '@react-navigation/stack';




export default function signin({navigation}) {
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
          <View style={style.Item}>
             <TextInput 
              placeholder={"Kullanıcı Adı"}
             style={style.Input}/>
          </View>
          <View style={style.Item}>
             <TextInput 
              placeholder={"Şifre"}
             style={style.Input}/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'flex-end',marginTop:10}}>
            <TouchableOpacity>
             <Text style={{color:'#838391', fontSize:15}}>Şifreni mi unuttun</Text>
             </TouchableOpacity>
          </View>
          <View style={style.Item}>
            <TouchableOpacity style={style.button}>
               <Text  style={{color:'#fff',fontSize:15,fontWeight:'700'}}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={[style.Item,{justifyContent:'center',alignItems:'center'}]}>
            <Text style={{color:'#838391',fontSize:17}}>
               or
            </Text>
          </View>
          <View style={style.social}>
            <TouchableOpacity style={style.social_item}>
              <Text>facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.social_item}>
              <Text>Linkedn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.social_item}>
              <Text>Twitter</Text>
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