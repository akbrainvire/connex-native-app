import {View, Text, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import SignUpStyle from './SignUpStyle';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const Block = ({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) => {
  return (
    <View style={SignUpStyle.container}>
      <TouchableOpacity
        onPress={() =>
          number == 1 &&
          Linking.openURL('https://connexecommerce.com/contact-sales')
        }>
        <View style={SignUpStyle.blockContainer}>
          <View>
            <Text style={SignUpStyle.numberText}>{number}</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={SignUpStyle.titleText}>{title}</Text>
            <Text style={SignUpStyle.descText}>{description}</Text>
          </View>
        </View>
      </TouchableOpacity>

      {number < 4 && <IconStyled></IconStyled>}
    </View>
  );
};
const IconStyled = () => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: -40,
        alignSelf: 'center',
      }}>
      <Icon name="arrow-down" size={40} color={'black'} />
    </View>
  );
};

const SignUp = () => {
  return (
    <View style={[SignUpStyle.mainContainer, {backgroundColor: 'white'}]}>
      <View style={SignUpStyle.logo}>
        <Image source={require('../../../assets/images/logo.png')} />
        <View>
          <Text style={{...SignUpStyle.logoTextTop, ...{color: '#000'}}}>
            Connex
          </Text>
          <Text style={{...SignUpStyle.logoTextBottom, ...{color: '#000'}}}>
            Inventory Planner
          </Text>
        </View>
      </View>
      <Text style={{...SignUpStyle.register, ...{color: '#000'}}}>
        Register
      </Text>

      <View style={SignUpStyle.allBlocks}>
        <Block
          number={1}
          title="Contact Sales"
          description="Register your requirement with contact sales"
        />

        <Block
          number={2}
          title="Check Email"
          description="Check email with registration link shared, It may take some time"
        />

        <Block
          number={3}
          title="Register with Connex "
          description="Register with link shared by the sales person"
        />

        <Block
          number={4}
          title="Purchase plan"
          description="Choose plan as per your requirement"
        />
      </View>
    </View>
  );
};

export default SignUp;
