import React from 'react'
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native'
import ProfileCard from '../components/ProfileCard'
import ProfileNotes from '../components/ProfileNotes'

// Styles
import styles from './styles/ProfileScreenStyles'

export default function ProfileScreen({navigation}) {
  const item = navigation.getParam('item', {})
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <ProfileCard item={item} />
        <ProfileNotes item={item} />
        <TouchableOpacity
          onPress={() => {
            navigation.push('UpdateProfile', {
              item: item
            })
          }}
          style={styles.editButton}
        >
          <Text style={{color: '#fff', fontSize: 16}}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
