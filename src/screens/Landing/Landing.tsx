import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import LandingStyle from './LandingStyle'
import { useNavigation } from '@react-navigation/native'
import Carousel, { Pagination } from 'react-native-snap-carousel';

interface ItemProps {
    title: string;
    text: string;
    image: string;
}

interface RenderItemProps {
    item: ItemProps;
    index: number;
}

const exampleItems = [
    {
        image: require('../../../assets/images/slider-img-1.png'),
        title: "Integrate sales data from all your sources",
        text: "Effortlessly merge your e-commerce platforms with QuickBooks for accurate, real-time financial and inventory insights, simplifying your business management",
    },
    {
        image: require('../../../assets/images/slider-img-2.png'),
        title: "Automate your business.",
        text: "Use the power of analytics and automation to get your e-commerce business to the next level",
    },
    {
        image: require('../../../assets/images/slider-img-3.gif'),
        title: "Reduce manual data entry tasks",
        text: "Dramatically reduce payroll and manual data entry, accelerate order processing, and enhance fulfillment speed for better operational efficiency and customer satisfaction.",
    },
    {
        image: require('../../../assets/images/slider-img-4.png'),
        title: "Get a clear view of your sales and inventory",
        text: "Easily reconcile high-volume sales with QuickBooks for enhanced financial accuracy, reduced accounting labor costs, and confident navigation of tax complexities",
    }
];

const Landing = () => {
    const navigation = useNavigation();
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [carouselItems, setCarouselItems] = useState<ItemProps[]>(exampleItems);
    const ref = useRef(null);

    const renderItem = useCallback(({ item, index }: RenderItemProps) => {
        return (
            <View
                style={{
                    //backgroundColor: "floralwhite",
                    //borderRadius: 5,
                    //height: 250,
                }}
            >
                <Image
                    style={LandingStyle?.itemImage}
                    source={item?.image}
                    resizeMode='contain'
                />
                <Text style={LandingStyle?.itemTitle}>{item.title}</Text>
                <Text style={LandingStyle?.itemDesc}>{item.text}</Text>
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
                    <View style={{ height: 480 }}>
                        <Carousel
                            layout={"default"}
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
                                marginHorizontal: 3,
                                backgroundColor: "#3E35F1"
                            }}
                            inactiveDotStyle={{
                                backgroundColor: "#fff"
                            }}
                            inactiveDotOpacity={0.4}
                            inactiveDotScale={0.6}
                        />
                    </View>
                    <View style={LandingStyle.btnPart}>
                        <TouchableOpacity style={LandingStyle.btn} onPress={() => navigation.navigate('Login')}>
                            <Text style={LandingStyle.btnText}>Log in</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={{ ...LandingStyle.btn, ...{ backgroundColor: '#fff' } }}
                            onPress={() => navigation.navigate('SignUp')}
                        >
                            <Text style={{ ...LandingStyle.btnText, ...{ color: '#44187A' } }}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* </ImageBackground> */}
            </View>
            {/* <View style={LandingStyle.overlay} /> */}
        </View>
    )
}

export default Landing

const styles = StyleSheet.create({})