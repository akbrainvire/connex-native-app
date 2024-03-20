import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import LandingStyle from './LandingStyle';
import {useNavigation} from '@react-navigation/native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import LottieView from 'lottie-react-native';

interface ItemProps {
  title: string;
  text: string;
  lottie: string;
  description: string;
}

interface RenderItemProps {
  item: ItemProps;
  index: number;
}

import Lottie1 from '../../../assets/lotties/Lottie-1.json';
import Lottie2 from '../../../assets/lotties/Lottie-2.json';
import Lottie3 from '../../../assets/lotties/Lottie-3.json';
import Lottie4 from '../../../assets/lotties/Lottie-4.json';

const carouselData: any = [
  {
    lottie: Lottie2,
    title: 'Manage your Amazon fees',
    description:
      'Receive detailed reports on Amazon commissions, FBA fees, and Amazon advertising expenses associated with orders',
  },
  {
    lottie: Lottie1,
    title: 'Get actionable information to improve your bottom line',
    description:
      'Connex will forecast sales, profits, and units sold of all your products. Connex will notify you, when it’s time to reorder',
  },
  {
    lottie: Lottie4,
    title: 'Free yourself from spreadsheets',
    description:
      'Connect Amazon, Bigcommerce, ShipStation, Shopify and WooCommerce to our tool to automatically pull in sales and update reports',
  },
  {
    lottie: Lottie3,
    title: 'Maximize profits from seasonal products',
    description: 'Only order as much as you need, based on historical data',
  },
];

const Landing = () => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [carouselItems, setCarouselItems] = useState<ItemProps[]>(carouselData);
  const ref = useRef(null);

  const {height, width} = Dimensions.get('window');

  const renderItem = useCallback(({item, index}: RenderItemProps) => {
    console.log(item);
    return (
      <View
        style={{
          flex: 1,
        }}>
        {/* <Image
             style={LandingStyle?.itemImage}
             source={item?.image}
             resizeMode="contain"
           />
           <Text style={LandingStyle?.itemTitle}>{item.title}</Text>
           <Text style={LandingStyle?.itemDesc}>{item.text}</Text>
         </View> */}

        <View key={item?.title} data-value={index + 1}>
          <View style={{height: height * 0.6, width: '100%'}}>
            <LottieView
              source={item.lottie}
              autoPlay
              loop
              style={{height: '60%', width: '100%'}}
            />
            <Text style={LandingStyle?.itemTitle}>{item.title}</Text>
            <Text style={LandingStyle?.itemDesc}>{item.description}</Text>
          </View>
        </View>
      </View>
    );
  }, []);

  return (
    <View style={LandingStyle.main}>
      {/* <ImageBackground source={require('../../../assets/images/banner1.png')} style={LandingStyle.imageContainer}> */}
      <View style={LandingStyle.imageContainer}>
        <View style={LandingStyle.descBox}>
          <View style={LandingStyle.logo}>
            <Image source={require('../../../assets/images/logo.png')} />
            <View>
              <Text style={LandingStyle.logoTextTop}>Connex</Text>
              <Text style={LandingStyle.logoTextBottom}>Inventory Planner</Text>
            </View>
          </View>
          {/* <View>
                        <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#fff' }}>Connex Inventory Planning</Text>
                    </View> */}
          <View style={{height: 550}}>
            <Carousel
              layout={'default'}
              ref={ref}
              data={carouselItems}
              // sliderWidth={300}
              // itemWidth={300}
              sliderWidth={Dimensions.get('window').width - 70}
              itemWidth={Dimensions.get('window').width - 70}
              renderItem={renderItem}
              onSnapToItem={(index: number) => setActiveIndex(index)}
              enableSnap
            />
            <Pagination
              dotsLength={carouselItems?.length} // also based on number of sildes you want
              activeDotIndex={activeIndex}
              //containerStyle={{ backgroundColor: "red", borderWidth: 2}}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 1,
                backgroundColor: '#3E35F1',
              }}
              inactiveDotStyle={{
                backgroundColor: '#fff',
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          </View>
          <View style={LandingStyle.btnPart}>
            <TouchableOpacity
              style={LandingStyle.btn}
              onPress={() => navigation.navigate('Login')}>
              <Text style={LandingStyle.btnText}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{...LandingStyle.btn, ...{backgroundColor: '#fff'}}}
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={{...LandingStyle.btnText, ...{color: '#44187A'}}}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </ImageBackground> */}
      </View>
      {/* <View style={LandingStyle.overlay} /> */}
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({});
