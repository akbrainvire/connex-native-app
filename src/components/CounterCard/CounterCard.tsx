import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CounterCardStyle from './CounterCardStyle'

interface ICounterCard  {
    title: string
    count: string
    color?: string
    index?: number
    bgColor?: string
    textColor?: string
    icon?: any
}

const CounterCard: React.FC<ICounterCard> = ({title, count, index, bgColor, textColor, icon}) => {
    return (
        <View style={{...CounterCardStyle.counterCardMain, marginLeft:  index == 0 ? 20 : 0}}>
            <View>
                <Text style={CounterCardStyle.titleText}>{title}</Text>
            </View>
            <View style={CounterCardStyle.bottomMain}>
                <Text style={CounterCardStyle.countText}>{count}</Text>
                <View style={{ ...CounterCardStyle.round, backgroundColor: bgColor }}>
                    {icon}
                </View>
            </View>
        </View>
    )
}

export default CounterCard