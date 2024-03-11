import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import MyAccountStyle from './MyAccountStyle'
import { ProfileItemCard } from '../../components'

const MyAccount = () => {

    const profileCardData = [
        {
            title: 'My Subscription',
            desc: 'View invoices, Update your credit card and Update your plan level by visiting our online portal.',
            link: ''
        },
        {
            title: 'Add Selling Channels',
            desc: 'To add additional selling channels to your account',
            link: ''
        },
        {
            title: 'Cancel Plan',
            desc: 'Complete this exit survey',
            link: ''
        }
    ];

    return (
        <ScrollView style={MyAccountStyle.myAccountMain}>
            <View style={MyAccountStyle.myAccountTop}>
                <View style={MyAccountStyle.profilePart}>
                    <Image
                        source={require('../../../assets/images/profile4.webp')}
                        style={{ width: 110, height: 110, borderRadius: 110 }}
                    />
                    <View>
                        <Text style={MyAccountStyle.profileName}>Test User </Text>
                        <Text style={MyAccountStyle.emailPlan}>Email: <Text style={{ fontStyle: 'italic', color: 'grey' }}>test@brainvire.com</Text></Text>
                        <Text style={MyAccountStyle.emailPlan}>Plan Level: <Text style={{ fontStyle: 'italic', color: 'grey' }}>Gold 8,000 Yearly Orders</Text></Text>
                    </View>
                </View>
            </View>
            <View style={MyAccountStyle.myAccountBottom}>
                {profileCardData?.map((data) => {
                    return <ProfileItemCard
                        key={data?.title}
                        title={data?.title}
                        desc={data?.desc}
                        link={data?.desc}
                    />
                })}
            </View>
        </ScrollView>
    )
}

export default MyAccount