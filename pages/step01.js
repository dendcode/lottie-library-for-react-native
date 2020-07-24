import React, { Component, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, AsyncStorage, TextInput, ImageBackground, Image, Dimensions, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LottieView from 'lottie-react-native';
import thumbsup from '../assets/lottieJSON/thumbs-up.json';


export default function Step01({navigation}) {

    



    return (
        <View style={{flex:1}}>
            
                <View style={{flex:1, justifyContent: "flex-start", alignItems: "center"}}>
                    <Text>Like Button</Text>
                </View>
                <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                <LottieView
                    source={require('../assets/lottieJSON/thumbs-up.json')}
                    autoPlay
                    loop={true}
                    width= '100%'

                />
                </View>
                <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                    <TouchableOpacity style={{backgroundColor: '#fff', width: '70%', height: '30%', borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginTop: '20%'}} onPress={()=> navigation.navigate('Step02')}>
                        <Text style={{fontSize: 20, color: '#3DC50D', fontWeight: 'bold'}}>돈키콩 게임 실행</Text>
                    </TouchableOpacity>
                
                <View style={{flex:1, justifyContent: "center", alignItems: "center"}}></View>
                    <TouchableOpacity style={{backgroundColor: '#fff', width: '70%', height: '30%', borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginTop: '20%'}} onPress={()=> navigation.navigate('Step03')}>
                        <Text style={{fontSize: 20, color: '#3DC50D', fontWeight: 'bold'}}>QR 코드 테스트</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                    <TouchableOpacity style={{backgroundColor: '#fff', width: '70%', height: '30%', borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginTop: '20%'}} onPress={()=> navigation.navigate('Step04')}>
                        <Text style={{fontSize: 20, color: '#3DC50D', fontWeight: 'bold'}}>게임 움직임</Text>
                    </TouchableOpacity>
                </View>

        </View>
    )

}