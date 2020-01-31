import React, { Component } from 'react'
import { FlatList, ScrollView, Text, Image,ImageBackground, View } from 'react-native'
import { Images } from '../themes'
import ProfileCard from '../components/ProfileCard';

// Styles
import styles from './styles/ProfileListScreenStyles'

export default function ProfileScreen({navigation}) {
  const item = navigation.getParam('item', {})
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {/* <Text>Boo</Text> */}
        <ProfileCard item={item} />
      </View>
    </View>
  )
}
