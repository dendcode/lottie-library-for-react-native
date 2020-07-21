import React, { Component, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, AsyncStorage, TextInput, ImageBackground, Image, Dimensions, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Main({navigation}) {

    return (
        <View style={{flex:1}}>
            
                <View style={{flex:4, justifyContent: "center", alignItems: "center"}}>
                    <Text style={{fontSize: 30, color: "#555"}}>Lottie Library</Text>
                    <Text style={{fontSize: 30, color: "#555"}}>For React Native</Text>
                </View>
                <View style={{flex:3, justifyContent: "center", alignItems: "center"}}>
                
                </View>
                <View style={{flex:3, justifyContent: "center", alignItems: "center"}}>
                    <TouchableOpacity style={{backgroundColor: '#fff', width: '70%', height: '30%', borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginTop: '20%'}} onPress={()=> navigation.navigate('Step01')}>
                        <Text style={{fontSize: 35, color: '#3DC50D', fontWeight: 'bold'}}>Go</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:2, justifyContent: "center", alignItems: "center"}}>
                    
                </View>

        </View>
    )

}