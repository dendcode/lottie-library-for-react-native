import React, { Component, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, AsyncStorage, TextInput, ImageBackground, Image, Dimensions, Platform, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as LocalAuthentication from 'expo-local-authentication';
import Constants  from 'expo-constants';



export default function Step05({navigation}) {


    // 생체인증 클래스
    class BioAuth extends Component {
        state = {
          compatible: false,
          fingerprints: false,
          result: '',
        };
      
        componentDidMount() {
          this.checkDeviceForHardware();
          this.checkForFingerprints();
        }
      
        checkDeviceForHardware = async () => {
          let compatible = await LocalAuthentication.hasHardwareAsync();
          this.setState({ compatible });
        };
      
        checkForFingerprints = async () => {
          let fingerprints = await LocalAuthentication.isEnrolledAsync();
          this.setState({ fingerprints });
        };
      
        scanFingerprint = async () => {
          let result = await LocalAuthentication.authenticateAsync(
            '생체을 인식해주세요.'
          );
          console.log('생체인식 결과:', result);
          this.setState({
            result: JSON.stringify(result),
          });
        };
      
        showAndroidAlert = () => {
          Alert.alert(
            '생체 인증',
            '인증을 하시겠습니까?',
            [
              {
                text: '인증',
                onPress: () => {
                  this.scanFingerprint();
                },
              },
              {
                text: '취소',
                onPress: () => console.log('취소'),
                style: '취소',
              },
            ]
          );
        };
      
        render() {
          return (
            <View style={styles.container}>
              <Text style={styles.text}>
                생체인증 테스트 {this.state.compatible === true ? 'True' : 'False'}
              </Text>
              <Text style={styles.text}>
                등록된 생체인증을 사용합니다{' '}
                {this.state.fingerprints === true ? 'True' : 'False'}
              </Text>
              <TouchableOpacity
                onPress={
                  Platform.OS === 'android'
                    ? this.showAndroidAlert
                    : this.scanFingerprint
                }
                style={styles.button}>
                <Text style={styles.buttonText}>바이오 인증</Text>
              </TouchableOpacity>
              <Text stytle={{fontSize:20, color: 'green', fontWeight: 'bold'}}>{this.state.result}</Text>
            </View>
          );
        }
      }
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingTop: Constants.statusBarHeight,
          backgroundColor: '#ecf0f1',
        },
        text: {
          fontSize: 18,
          textAlign: 'center',
        },
        button: {
          alignItems: 'center',
          justifyContent: 'center',
          width: 150,
          height: 60,
          backgroundColor: '#3dc666',
          borderRadius: 5,
        },
        buttonText: {
          fontSize: 25,
          color: '#fff',
        },
      });
      



    return(
        <View style={{flex:1}}>
            <BioAuth></BioAuth>
        </View>
    )
    

}