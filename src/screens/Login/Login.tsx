import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LoginStyle from './LoginStyle';
import LandingStyle from '../Landing/LandingStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import CheckBox from 'react-native-check-box';
import {useDispatch} from 'react-redux';
import {authorize, loginUser} from '../../redux/slice/AuthenticSlice';
// import { Icon } from 'react-native-elements';

const Login = ({navigation}: any) => {
  const [state, setState] = useState({email: '', password: ''});
  const [errorMsg, setErrorMsg] = useState({email: '', password: ''});
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email: string) => {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const handleError = () => {
    if (!state.email || !validateEmail(state.email)) {
      setErrorMsg(prev => ({
        ...prev,
        email: !state.email
          ? 'Email required'
          : 'Please enter a valid email address',
      }));
    } else if (!state.password) {
      setErrorMsg(prev => ({
        ...prev,
        email: '',
        password: 'Password required',
      }));
    } else {
      setErrorMsg({email: '', password: ''});
    }
  };

  const handleLogin = () => {
    handleError();
    if (
      errorMsg.email == '' &&
      errorMsg.password == '' &&
      state.email !== '' &&
      state.password !== ''
    ) {
      dispatch(loginUser({username: state.email, password: state.password}));
    }
  };
  console.log(errorMsg, 'errorMsg');
  return (
    <View style={LoginStyle.loginMain}>
      <View style={LoginStyle.topSection}>
        {/* <View style={LandingStyle.logo}>
                    <Image source={require('../../../assets/images/logo.png')} />
                    <View>
                        <Text style={{...LandingStyle.logoTextTop, ...{color: '#000'}}}>Connex</Text>
                        <Text style={{...LandingStyle.logoTextBottom, ...{color: '#000'}}}>Inventory Planner</Text>
                    </View>
                </View> */}
        <Text style={LoginStyle.topTitle}>Welcome!</Text>
        <Text style={LoginStyle.topDesc}>
          Please enter your details to login
        </Text>
        {/* <Icon name="md-beer" type="ionicon" color="#887700" /> */}
        {/* <View>
                    <TouchableOpacity>
                    <Icon name="rocket" size={30} color="#900" />
                    </TouchableOpacity>
                </View> */}
      </View>
      <View style={LoginStyle.middleSection}>
        <View style={LoginStyle.inputContainer}>
          <Text style={LoginStyle.label}>Username/Email Address</Text>
          <TextInput
            style={LoginStyle.input}
            placeholder="Enter Your Username/Email Address"
            value={state?.email}
            onChangeText={e => {
              setState({password: state.password, email: e});
            }}
            onBlur={handleError}
          />
          {errorMsg?.email != '' && (
            <Text style={LoginStyle.errorMsg}>{errorMsg.email}</Text>
          )}
        </View>
        <View style={LoginStyle.inputContainer}>
          <Text style={LoginStyle.label}>Password</Text>
          <TextInput
            style={LoginStyle.input}
            placeholder="Enter Your Password"
            value={state?.password}
            onChangeText={e => setState({email: state.email, password: e})}
            secureTextEntry={!showPassword}
            onBlur={handleError}
          />
          <Icon
            name={showPassword ? 'eye' : 'eye-off'}
            style={LoginStyle.passwordIcon}
            size={20}
            color={'black'}
            onPress={() => setShowPassword(prev => !prev)}
          />
        </View>
        {errorMsg?.password != '' && (
          <Text style={LoginStyle.errorMsg}>{errorMsg.password}</Text>
        )}
        <View style={LoginStyle.checkboxDiv}>
          <View style={{width: '50%'}}>
            <CheckBox
              //style={{ flex: 1, padding: 10 }}
              onClick={() => setRememberMe(!rememberMe)}
              isChecked={rememberMe}
              rightText="Remember Me"
              rightTextStyle={{color: '#020024'}}
              style={LoginStyle.checkbox}
              checkBoxColor="#020024"
              checkedCheckBoxColor="#020024"
            />
          </View>
          <Text
            style={{
              textAlign: 'right',
              textDecorationLine: 'underline',
              color: '#020024',
            }}
            onPress={() => navigation.navigate('ResetPassword')}>
            Forgot Password
          </Text>
          {/* <View style={{ width: 120 }}>
                        <TouchableOpacity>
                            <Text style={{ fontWeight: 'bold', textAlign: 'right', color: '#000' }}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View> */}
        </View>
      </View>
      <View style={LoginStyle.bottomSection}>
        <TouchableOpacity
          style={{...LandingStyle.btn, backgroundColor: '#020024'}}
          onPress={() => handleLogin()}>
          <Text style={LandingStyle.btnText}>Log in</Text>
        </TouchableOpacity>
        <Text style={LoginStyle.DontHaveAcc}>
          <Text>Don't have an account yet?</Text>
          <Text
            style={{fontWeight: 'bold', textDecorationLine: 'underline'}}
            onPress={() => navigation.navigate('SignUp')}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
