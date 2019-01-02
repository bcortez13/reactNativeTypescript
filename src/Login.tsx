import React, { Component } from 'react'
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Divider, Input, Text } from 'react-native-elements'

export default class Login extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                // justifyContent: 'space-evenly',
                alignItems: 'center',
                backgroundColor: '#ebd0ce',
                paddingTop: 100,
            }}>
                <View
                    style={{
                        // justifyContent: 'space-between',
                        // backgroundColor: '#000',
                        // height: 90,
                        width: 300,
                        flex: 2,
                    }}
                >
                    <Input
                        style={{
                            // backgroundColor: '#fff',
                            // textAlign: 'center'
                        }}
                        inputStyle={{
                            textAlign: 'center',
                            backgroundColor: '#9597A6',
                        }}
                        containerStyle={{
                            backgroundColor: '#9597A6',
                            width: '100%',
                            marginBottom: 5
                        }}
                        placeholder="USER NAME"
                        placeholderTextColor='#fff'
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='black'
                            />
                        }
                    />
                    <Input
                        style={{
                            // backgroundColor: '#62fffa'
                        }}
                        inputStyle={{textAlign: 'center'}}
                        containerStyle={{
                            backgroundColor: '#9597A6',
                            width: '100%'
                        }}
                        placeholder="PASSWORD"
                        placeholderTextColor='#fff'
                        leftIcon={
                        <Icon
                            name='lock'
                            size={24}
                            color='black'
                        />
                    }
                    />
                </View>
                <View
                    style={{
                        flex: 5,
                        // width: '100%',
                        // backgroundColor: '#a66b0f',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        paddingBottom: 230
                    }}>
                    <View style={{
                        alignItems: 'center',
                    }}>
                        <Text  style={{fontSize: 20}}>
                            SIGN IN
                        </Text>
                        <Text style={{fontSize: 15}}>
                            Forgot Password?
                        </Text>
                    </View>
                    <Text style={{fontSize: 15}}>
                        - or -
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        // alignItems: 'center',
                        // backgroundColor: '#fff',
                        width: 300,
                        // paddingLeft: 10,
                        // paddingRight: 10,
                        height: 50
                    }}>
                        <View style={{
                            borderStyle: 'solid',
                            borderColor: 'black',
                            borderWidth: 1,
                            height: '100%',
                            width: 100,
                            justifyContent: 'center',
                            alignItems: 'center'
                            // backgroundColor: 'black'
                        }}>
                            <Text>
                                FB
                            </Text>
                        </View>
                        <View style={{
                            borderStyle: 'solid',
                            borderColor: 'black',
                            borderWidth: 1,
                            height: '100%',
                            width: 100,
                            justifyContent: 'center',
                            alignItems: 'center',
                            // backgroundColor: 'black'
                        }}>
                            <Text>
                                G+
                            </Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        width: '70%',
                        flex: 2,
                        // alignItems: 'center',
                        // backgroundColor: '#a0a6a1',
                        // borderStyle: 'solid',
                        // borderWidth: 3,
                        // borderTopWidth: '#000',
                        // alignItems: 'center',
                    }}>
                    <Divider style={{ height: 2, backgroundColor: 'black'}}/>
                    <Text style={{
                        fontSize: 20,
                        textAlign: 'center'
                    }}>
                        New here? SIGN UP
                    </Text>
                </View>
            </View>
        )
    }
}
