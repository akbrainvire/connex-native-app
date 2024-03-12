import {Dimensions, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';

export const TabButton = ({label, isFocused, onPress, darkMode}: any) => {
  // console.log(isFocused, 'isFocused');
  // const {width} = Dimensions.get('window');
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={[
          {
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            // backgroundColor: 'white',
            borderRadius: 40,
          },
        ]}>
        <View
          style={[
            {
              backgroundColor: 'black',
              borderRadius: 20,
              padding: 3,
              paddingVertical: 4.5,
            },
          ]}>
          {getIcon(label, isFocused)}
        </View>
        <View>
          <Text
            style={[
              {
                color: isFocused ? 'white' : 'grey',
                paddingHorizontal: 5,
                fontWeight: 'bold',
                // width: width * 0.13,
              },
            ]}
            numberOfLines={1}>
            {label}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const getIcon = (label: string, isFocused: boolean) => {
  switch (label.toLowerCase()) {
    case 'dashboard':
      return (
        <IconMaterialIcons
          name="dashboard"
          size={20}
          color={isFocused ? '#fff' : 'grey'}
        />
      );
    case 'products':
      return (
        <FontAwesome5Icons
          name="gift"
          size={20}
          color={isFocused ? '#fff' : 'grey'}
        />
      );
    case 'inventory':
      return (
        <IconMaterialIcons
          name="inventory"
          size={20}
          color={isFocused ? '#fff' : 'grey'}
        />
      );
    case 'orders':
      return (
        <IconMaterialIcons
          name="shopping-cart"
          size={20}
          color={isFocused ? '#fff' : 'grey'}
        />
      );
    case 'reports':
      return (
        <IconMaterialIcons
          name="event-note"
          size={20}
          color={isFocused ? '#fff' : 'grey'}
        />
      );
    default:
      return (
        <IconMaterialIcons
          name="home"
          size={20}
          color={isFocused ? '#fff' : 'grey'}
        />
      );
  }
};
