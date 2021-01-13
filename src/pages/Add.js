import React from 'react'
import { View, Text, StyleSheet,ScrollView,SafeAreaView,Image,Button, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import signin from './signin'; 

import MainStore from './MainStore';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class Add extends React.Component{

    componentDidMount(){
        console.log(MainStore.getName());
    }
    render() {
        const { navigation } = this.props;
    return (
        <SafeAreaView style={style.body}>
            <View style={style.header}>
                <Text style={style.text_sign}>Sign Up</Text>
            </View>
            <View style={style.logo}>
                <Image source={require('../../assets/signup.png')} />
            </View>
            <View style={style.board}>
                <View style={style.ınput}>
                    <TextInput
                    placeholder={'Enter Mail'} 
                    style={style.item}/>
                </View>
                <View style={style.ınput}>
                    <TextInput 
                    placeholder={'Enter Password'}
                    style={style.item}/>
                </View>
                <View style={style.ınput}>
                    <TextInput
                    placeholder={'Confirm Password'} 
                    style={style.item}/>
                </View>
                <View style={style.ınput}>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.text_button}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent:'center', alignItems:'center' }}>
                    <Text style={{fontSize:17,color:'#525464'}}>or</Text>
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
                    <Text style={style.signup}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('signin')}>
                    <Text style={style.up}>Sign</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
    }
}

const style =StyleSheet.create({
    
    body:{backgroundColor:'white',flex: 1,},
    header:{justifyContent:'center',alignItems:'center', padding:20},
    text_sign:{ color:'#525464', fontSize:20,fontWeight:'500'},
    logo:{justifyContent:'center',alignItems:'center',marginTop:25},
    board:{marginTop:10,paddingHorizontal:30},
    ınput:{padding:7},
    item:{
    backgroundColor:'#F7F7F7',
    borderColor:'#B0B0C3',
    borderWidth:1,
    paddingVertical:10,
    paddingHorizontal:30  },
    button:{
        backgroundColor:'#20C3AF',
        paddingVertical:15,
        justifyContent:'center',
        alignItems:'center'
    },
    text_button:{
        color:'#fff'
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
    signup:{
        fontSize:17,
        color:'#838391'
      },
    up:{
        color:'#FFB19D',
        fontSize:17,
    
      },
    account:{
        justifyContent:'center',
        alignItems:'center'
    }

},

)