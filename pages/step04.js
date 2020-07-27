import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, AsyncStorage, TextInput, ImageBackground, Image, Dimensions, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LottieView from 'lottie-react-native';



export default function Step04({navigation}) {

    const [change, setChange] = React.useState(false);
    const [number, setStateNumber] = useState(1);

    const img1 = require('../assets/motion/run1.png');
    const img2 = require('../assets/motion/run2.png');
    const img3 = require('../assets/motion/run3.png');
    var kerik = img1;

    function motionChange1 () {

            if(kerik == img1) {
                kerik = img2            
            } else if(kerik == img2) {
                kerik = img3
            } else if(kerik == img3) {
                kerik = img1            
            }
            setStateNumber(number+1);
            setChange(!false)        
        
    }

    const motionChange2 = () => {
        if(number % 3 == 1) {
            return(<Image source={img1} style={{width: 100, height: 100}}/>)
            kerik = img2            
        } else if(number % 3 == 2) {
            return(<Image source={img2} style={{width: 100, height: 100}}/>)
            kerik = img3
        } else if(number % 3 == 0) {
            return(<Image source={img3} style={{width: 100, height: 100}}/>)
            kerik = img1            
        }
        setChange(!false)
    }


    return (
        <View style={{flex:1}}>
            
                <View style={{flex:4, justifyContent: "flex-start", alignItems: "center"}}>
                    <Text>Like Button</Text>
                </View>
                <View style={{flex:3, alignContent: 'center', justifyContent: "center", alignItems: "center"}}>

                
                        {motionChange2()}
                        <Text style={{fontSize:25, justifyContent: 'center', alignItems: 'center', marginBottom: 100}}>HIT! 아래 버튼을 빠르게 연타하세요</Text>
                   


                </View>

                
                <TouchableOpacity onPress={()=>{motionChange1();}} style={{ flex: 1, borderRadius: 60, backgroundColor:'red', justifyContent: 'center', alignItems: 'center'}}>

                        <Text style={{fontSize:50, color: '#fff'}}>HIT</Text>

                </TouchableOpacity>
                
                <View style={{flex:3, justifyContent: "center", alignItems: "center"}}>
                    <TouchableOpacity style={{backgroundColor: '#fff', width: '70%', height: '30%', borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginTop: '20%'}} onPress={()=> navigation.navigate('Main')}>
                        <Text style={{fontSize: 35, color: '#3DC50D', fontWeight: 'bold'}}>Next</Text>
                    </TouchableOpacity>
                </View>

        </View>
    )

}