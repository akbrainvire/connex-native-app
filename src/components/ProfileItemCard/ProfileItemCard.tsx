import { View, Text, Button } from 'react-native'
import React from 'react'
import ProfileItemCardStyle from './ProfileItemCardStyle'

interface IProfileItemCard {
    title: string
    desc: string
    link: string
}

const ProfileItemCard: React.FC<IProfileItemCard> = ({title, desc, link}) => {
    return (
        <View style={ProfileItemCardStyle.itemCardMain}>
            <Text style={ProfileItemCardStyle.itemTitle}>{title}</Text>
            <Text style={ProfileItemCardStyle.itemDesc}>{desc}</Text>
            <View style={ProfileItemCardStyle.itemButton}>
                <Text style={{ color: '#fff' }}>Click Here</Text>
            </View>
        </View>
    )
}

export default ProfileItemCard