import React, { Component, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, AsyncStorage, TextInput, ImageBackground, Image, Dimensions, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function Step02({navigation}) {


    return (
        <ImageBackground source={require('../assets/hell_map.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={{flex:1}}>
            
            <View>
                <TouchableOpacity>
                    <Image source={require('../assets/man.jpg')} style={{width: 80, height: 80, marginLeft: '30%', marginTop: '80%'}}/>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <Image source={require('../assets/man.jpg')} style={{width: 80, height: 80, marginLeft: '30%', marginTop: '30%'}}/>
                </TouchableOpacity>    
            </View>
            <View>
                <TouchableOpacity>
                    <Image source={require('../assets/man.jpg')} style={{width: 80, height: 80, marginLeft: '80%', marginTop: '10%'}}/>
                </TouchableOpacity>
            </View>
        </View>
        </ImageBackground>
        
    );
    

}