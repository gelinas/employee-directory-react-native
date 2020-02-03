import React from 'react'
import { Text, SafeAreaView, View } from 'react-native'
import ProfileForm from '../components/ProfileForm'

// Styles
import styles from './styles/ProfileScreenStyles'

export default function AddProfileScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <ProfileForm />
      </View>
    </SafeAreaView>
  )
}
