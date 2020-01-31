import React from 'react'
import {Text, View } from 'react-native'

// Styles
import styles from './styles/ProfileCardStyles'

export default function ProfileCard({item}) {
  return (
    <View style={styles.section}>
      <View style={styles.profile}>
        <View>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            {`Notes for ${item.first_name} ${item.last_name}:`}
          </Text>
          <Text style={{fontSize: 16}}>
            {item.notes ? item.notes : "None currently on file"}</Text>
        </View>
      </View>
    </View>
  )
}