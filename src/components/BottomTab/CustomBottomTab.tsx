import {Dimensions, StyleSheet, View} from 'react-native';
import {TabButton} from './TabButton';

export const CustomTabBar = ({
  state,
  descriptors,
  navigation,
  children,
}: any) => {
  //   console.log(state, 'statecustom');

  return (
    <View style={[styles.mainContainer]}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TabButton
            key={index}
            label={label}
            isFocused={isFocused}
            onPress={onPress}
            //   darkMode={darkMode}
          />
        );
      })}

      {children}
    </View>
  );
};

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    height: 70,
    // borderTopLeftRadius: 25,
    // borderTopRightRadius: 25,
    // shadowColor: '#000000',
    // shadowOffset: {
    //   width: 0,
    //   height: 10,
    // },
    // position: 'absolute',
    // shadowOpacity: 1,
    // shadowRadius: 10.0,
    // elevation: 30,
    paddingVertical: 10,
    // bottom: 0,
    marginTop: -height * 0.02,
    width: '100%',
    // zIndex: 0,
    borderTopWidth: 0,
    backgroundColor: '#020024',
  },
});
