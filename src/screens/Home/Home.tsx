import { FlatList, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { CounterCard, Menu } from '../../components'
import HomeStyle from './HomeStyle'
import { BarChart, StackedBarChart, LineChart } from 'react-native-chart-kit'
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Home = () => {

  const counterData = [
    {
      title: 'Total Customers Count',
      count: '268',
      bgColor: '#DEE1FF',
      textColor: '#5061FF',
      icon: <IconFontAwesome5 name="hand-holding-usd" size={25} color="#5061FF" />
    },
    {
      title: 'Total Products Count',
      count: '1,537',
      bgColor: '#FEEFF6',
      textColor: '#EF4695',
      icon: <IconFontAwesome5 name="gift" size={25} color="#EF4695" />
    },
    {
      title: 'Total Order Count',
      count: '1,537',
      bgColor: '#DEF4FF',
      textColor: '#33B8F5',
      icon: <IconMaterialIcons name="shopping-cart" size={25} color="#33B8F5" />
    }
  ]

  return (
    <ScrollView style={HomeStyle.homeMain}>
      {/* <Text style={HomeStyle.homeTitle}>Dashboard</Text> */}
      <View style={HomeStyle.counterMain}>
        <FlatList
          keyExtractor={(item) => item?.title}
          data={counterData}
          renderItem={({ item, index }) =>
            <CounterCard
              title={item?.title}
              count={item?.count}
              bgColor={item?.bgColor}
              textColor={item?.textColor}
              index={index}
              icon={item?.icon}
            />
          }
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={HomeStyle.chartMain}>
        <View style={HomeStyle.chartSub}>
          <View style={HomeStyle.chartHead}>
            <Text style={HomeStyle.chartHeadText}>Total Profit</Text>
          </View>
          <View style={HomeStyle.chartSubBottom}>
            <LineChart
              data={{
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [
                  {
                    data: [20, 45, 28, 80, 99, 43],
                    color: (opacity = 1) => `rgba(171,203,169, ${opacity})`, // optional
                    strokeWidth: 2 // optional
                  }
                ],
              }}
              width={Dimensions.get("window").width - 70}
              height={350}
              chartConfig={{
                backgroundGradientFrom: "#fff",
                backgroundGradientTo: "#fff",
                decimalPlaces: 2, // optional, defaults to 2dp
                //color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                //labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                color: (opacity = 1) => `rgba(171,203,169, 1)`,
                labelColor: (opacity = 1) => `#000`,
                style: {
                  borderRadius: 16,
                  backgroundColor: '#fff'
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#fff"
                }
              }}
              style={{
                //marginVertical: 8,
                //borderRadius: 16,
                backgroundColor: '#fff'
              }}
            />
          </View>
        </View>

        <View style={HomeStyle.chartSub}>
          <View style={HomeStyle.chartHead}>
            <Text style={HomeStyle.chartHeadText}>Total Sale</Text>
          </View>
          <View style={HomeStyle.chartSubBottom}>
            <StackedBarChart
              data={{
                labels: ["Test1", "Test2"],
                legend: ["L1", "L2"],
                data: [
                  [60, 60],
                  [30, 30]
                ],
                //barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"],
                barColors: ['#6D66F7', '#32E8D3']
              }}
              width={Dimensions.get("window").width - 70}
              height={350}
              chartConfig={{
                backgroundGradientFrom: "#fff",
                backgroundGradientTo: "#fff",
                decimalPlaces: 2, // optional, defaults to 2dp
                //color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                //labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                color: (opacity = 1) => `#000`,
                labelColor: (opacity = 1) => `#000`,
                style: {
                  borderRadius: 16,
                  backgroundColor: '#fff'
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#fff"
                }
              }}
              hideLegend={false}
              style={{
                //marginVertical: 8,
                //borderRadius: 16,
                backgroundColor: '#fff'
              }}
            />
          </View>
        </View>
        
        <View style={HomeStyle.chartSub}>
          <View style={HomeStyle.chartHead}>
            <Text style={HomeStyle.chartHeadText}>Forecasting</Text>
          </View>
          <View style={HomeStyle.chartSubBottom}>
            <LineChart
              data={{
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [
                  {
                    data: [20, 45, 28, 80, 99, 43],
                    color: (opacity = 1) => `rgba(178,174,249, ${opacity})`, // optional
                    strokeWidth: 2 // optional
                  },
                  {
                    data: [10, 20, 30, 40, 50, 60],
                    color: (opacity = 1) => `rgba(178,174,249, ${opacity})`, // optional
                    strokeWidth: 2 // optional
                  }
                ],
              }}
              width={Dimensions.get("window").width - 70}
              height={350}
              chartConfig={{
                backgroundGradientFrom: "#fff",
                backgroundGradientTo: "#fff",
                decimalPlaces: 2, // optional, defaults to 2dp
                //color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                //labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                color: (opacity = 1) => `rgba(178,174,249,1)`,
                labelColor: (opacity = 1) => `#000`,
                style: {
                  borderRadius: 16,
                  backgroundColor: '#fff'
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#fff"
                }
              }}
              style={{
                //marginVertical: 8,
                //borderRadius: 16,
                backgroundColor: '#fff'
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Home