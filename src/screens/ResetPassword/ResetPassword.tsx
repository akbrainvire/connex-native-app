import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ResetPasswordStyle from './ResetPasswordStyle'
import LandingStyle from '../Landing/LandingStyle'

const ResetPassword = () => {
    return (
        <View style={ResetPasswordStyle.resetPassMain}>
            <View style={ResetPasswordStyle.topSection}>
                <Text style={ResetPasswordStyle.topTitle}>Reset Password</Text>
                <Text style={ResetPasswordStyle.topDesc}>Enter your email to reset your password.</Text>
            </View>
            <View style={ResetPasswordStyle.middleSection}>
                <View style={ResetPasswordStyle.inputContainer}>
                    <Text style={ResetPasswordStyle.label}>Email id*</Text>
                    <TextInput
                        style={ResetPasswordStyle.input}
                        placeholder='Email'
                        value={''}
                        onChangeText={(e) => console.log('')}
                    />
                </View>
            </View>
            <View style={ResetPasswordStyle.bottomSection}>
                <TouchableOpacity style={{...LandingStyle.btn, backgroundColor: '#020024',}}>
                    <Text style={LandingStyle.btnText}>Reset Password</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ResetPassword