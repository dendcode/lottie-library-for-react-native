import React, { Component, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, AsyncStorage, TextInput, ImageBackground, Image, Dimensions, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LottieView from 'lottie-react-native';



export default function Step03({navigation}) {

    


    return (
        <View style={{flex:1}}>
            
                <View style={{flex:4, justifyContent: "flex-start", alignItems: "center"}}>
                    <Text>Like Button</Text>
                </View>
                <View style={{flex:3, justifyContent: "center", alignItems: "center"}}>
                <LottieView
                    source={require('../assets/lottieJSON/shape-dance.json')}
                    autoPlay
                    loop={true}
                    width= '100%'

                />
                </View>
                <View style={{flex:3, justifyContent: "center", alignItems: "center"}}>
                    <TouchableOpacity style={{backgroundColor: '#fff', width: '70%', height: '30%', borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginTop: '20%'}} onPress={()=> navigation.navigate('Step04')}>
                        <Text style={{fontSize: 35, color: '#3DC50D', fontWeight: 'bold'}}>Next</Text>
                    </TouchableOpacity>
                </View>

        </View>
    )

}