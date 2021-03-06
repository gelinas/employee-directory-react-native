import React from 'react'
import { Text, SafeAreaView, ScrollView, View, KeyboardAvoidingView } from 'react-native'
import ProfileForm from '../components/ProfileForm'

// Styles
import styles from './styles/ProfileScreenStyles'

export default function AddProfileScreen({navigation}) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View view={styles.container}>
        <ProfileForm  navigation={navigation} />
      </View>
    </SafeAreaView>
  )
}
