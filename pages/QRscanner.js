import React, { Component, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, AsyncStorage, TextInput, ImageBackground, Image, Dimensions, Platform, StatusBar, LayoutAnimation } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LottieView from 'lottie-react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

// QR 코드 클래스 모듈
export default class QRscanner extends React.Component {

    state = { 
        hasCameraPermission: null,
        lastscannedUrl: null,
    };

    componentDidMount() {
        this._requestCameraPermission();
    }
    
    _requestCameraPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission: status === 'granted',
        });
    };

    _handleBarCodeRead = result => {
        if (result.data !== this.state.lastScannedUrl) {
            LayoutAnimation.spring();
            this.setState({ lastScannedUrl: result.data });
            console.log(result.data);
        }
    };

    render() {
        return (
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000'}}>
    
                {this.state.hasCameraPermission === null
                    ? <Text>Requesting for camera permission</Text>
                    : this.state.hasCameraPermission === false
                        ? <Text style={{ color: '#fff' }}>
                            Camera permission is not granted
                        </Text>
                        : 
                        <BarCodeScanner
                            onBarCodeRead={this._handleBarCodeRead}
                            style={{
                            height: Dimensions.get('window').height,
                            width: Dimensions.get('window').width,
                            }}
                        />
                        }
        
                {this._maybeRenderUrl()}
        
                <StatusBar hidden />
            </View>
        );
    }

    _handlePressUrl = () => {
        Alert.alert(
            'Open this URL?',
            this.state.lastScannedUrl,
            [
            {
                text: 'Yes',
                onPress: () => Linking.openURL(this.state.lastScannedUrl),
            },
            { text: 'No', onPress: () => {} },
            ],
            { cancellable: false }
        );
    };

    _handlePressCancel = () => {
        this.setState({ lastScannedUrl: null });
    };

    _maybeRenderUrl = () => {
        if (!this.state.lastScannedUrl) {
            return;
        }
        return (
            <View style={{position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.5)', padding: 15, flexDirection: 'row'}}>
            <TouchableOpacity style={{flex:1}} onPress={this._handlePressUrl}>
                <Text numberOfLines={1} style={{color: '#fff', fontSize: 20}}>
                {this.state.lastScannedUrl}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{marginLeft: 10, alignItems: 'center', justifyContent: 'center'}}
                onPress={this._handlePressCancel}>
                <Text style={{color: 'rgba(255,255,255,0.8)', fontSize: 18}}>
                Cancel
                </Text>
            </TouchableOpacity>
            </View>
        );
    };

}