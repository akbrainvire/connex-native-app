import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SignUpStyle from './SignUpStyle';
import LandingStyle from '../Landing/LandingStyle';
import * as yup from 'yup';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {signupUser} from '../../redux/slice/AuthenticSlice';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleSignUp = (values: any) => {
    dispatch(signupUser(values));
  };
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={values => handleSignUp(values)}
      validationSchema={yup.object().shape({
        firstName: yup
          .string()
          .required('First Name is Required.')
          .min(1, 'First Name is Too Short.'),
        lastName: yup
          .string()
          .required('Last Name is Required.')
          .min(1, 'Last Name is Too Short.'),
        email: yup.string().email().required('Email is Required.'),
        password: yup
          .string()
          .required('No password provided.')
          .min(8, 'Password is too short - should be 8 chars minimum.')
          .matches(/(?=.*[0-9])/, 'Password must contain a number.'),
        confirmPassword: yup
          .string()
          .oneOf([yup.ref('password')], 'Passwords must match'),
      })}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
      }) => (
        <View style={SignUpStyle.signupMain}>
          <View style={SignUpStyle.topSection}>
            <Text style={SignUpStyle.topTitle}>Connex Inventory Planning</Text>
            <Text style={SignUpStyle.topDesc}>
              Please create a login for Connex Reporting
            </Text>
          </View>
          <View style={SignUpStyle.middleSection}>
            <View style={SignUpStyle.inputContainer}>
              <Text style={SignUpStyle.label}>First name*</Text>
              <TextInput
                style={SignUpStyle.input}
                placeholder="First name"
                value={values.firstName}
                onChangeText={handleChange('firstName')}
                onBlur={() => setFieldTouched('firstName')}
              />
              {touched.firstName && errors.firstName && (
                <Text style={SignUpStyle.errorMsg}>{errors.firstName}</Text>
              )}
            </View>
            <View style={SignUpStyle.inputContainer}>
              <Text style={SignUpStyle.label}>Last name*</Text>
              <TextInput
                style={SignUpStyle.input}
                placeholder="Last name"
                value={values.lastName}
                onChangeText={handleChange('lastName')}
                onBlur={() => setFieldTouched('lastName')}
              />
              {touched.lastName && errors.lastName && (
                <Text style={SignUpStyle.errorMsg}>{errors.lastName}</Text>
              )}
            </View>
            <View style={SignUpStyle.inputContainer}>
              <Text style={SignUpStyle.label}>Email address*</Text>
              <TextInput
                style={SignUpStyle.input}
                placeholder="Email address"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
              />
              {touched.email && errors.email && (
                <Text style={SignUpStyle.errorMsg}>{errors.email}</Text>
              )}
            </View>
            <View style={SignUpStyle.inputContainer}>
              <Text style={SignUpStyle.label}>Password*</Text>
              <TextInput
                style={SignUpStyle.input}
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                secureTextEntry={!showPassword}
              />
              <Icon
                name={showPassword ? 'eye' : 'eye-off'}
                style={SignUpStyle.passwordIcon}
                size={20}
                color={'black'}
                onPress={() => setShowPassword(prev => !prev)}
              />
            </View>
            {touched.password && errors.password && (
              <Text style={SignUpStyle.errorMsg}>{errors.password}</Text>
            )}
            <View style={SignUpStyle.inputContainer}>
              <Text style={SignUpStyle.label}>Confirm Password*</Text>
              <TextInput
                style={SignUpStyle.input}
                placeholder="Confirm Password"
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={() => setFieldTouched('confirmPassword')}
                secureTextEntry={!confirmShowPassword}
              />
              <Icon
                name={confirmShowPassword ? 'eye' : 'eye-off'}
                style={SignUpStyle.passwordIcon}
                size={20}
                color={'black'}
                onPress={() => setConfirmShowPassword(prev => !prev)}
              />
            </View>
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={SignUpStyle.errorMsg}>{errors.confirmPassword}</Text>
            )}
          </View>
          <View style={SignUpStyle.bottomSection}>
            <TouchableOpacity
              style={{...LandingStyle.btn, backgroundColor: '#020024'}}
              onPress={() => handleSubmit()}>
              <Text style={LandingStyle.btnText}>Sign up</Text>
            </TouchableOpacity>
            <Text style={SignUpStyle.privacyPolicy}>
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </Text>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SignUp;
