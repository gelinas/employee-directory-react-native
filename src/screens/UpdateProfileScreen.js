import React from 'react'
import { Text, SafeAreaView, ScrollView, View, KeyboardAvoidingView } from 'react-native'
import ProfileForm from '../components/ProfileForm'

// Styles
import styles from './styles/ProfileScreenStyles'

export default function UpdateProfileScreen({navigation}) {
  const item = navigation.getParam('item', {})
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View view={styles.container}>
        <ProfileForm item={item} navigation={navigation} />
      </View>
    </SafeAreaView>
  )
}
