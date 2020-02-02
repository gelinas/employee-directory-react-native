import React, { Component } from 'react'
import { FlatList, ScrollView, Text, Image,ImageBackground, View } from 'react-native'
import { Images } from '../themes'
import ProfileCard from '../components/ProfileCard'
import ProfileNotes from '../components/ProfileNotes'

// Styles
import styles from './styles/ProfileScreenStyles'

export default function ProfileScreen({navigation}) {
  const item = navigation.getParam('item', {})
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text>Boo</Text>
      </View>
    </View>
  )
}
