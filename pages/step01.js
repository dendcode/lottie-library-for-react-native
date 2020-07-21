import React, { Component, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, AsyncStorage, TextInput, ImageBackground, Image, Dimensions, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Step01({navigation}) {

    return (
        <View style={{flex:1}}>
            
                <View style={{flex:4, justifyContent: "flex-start", alignItems: "center"}}>
                    
                </View>
                <View style={{flex:3, justifyContent: "center", alignItems: "center"}}>
                
                </View>
                <View style={{flex:3, justifyContent: "center", alignItems: "center"}}>
                    <TouchableOpacity style={{backgroundColor: '#fff', width: '70%', height: '30%', borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginTop: '20%'}} onPress={()=> navigation.navigate('Main')}>
                        <Text style={{fontSize: 35, color: '#3DC50D', fontWeight: 'bold'}}>Next</Text>
                    </TouchableOpacity>
                </View>

        </View>
    )

}