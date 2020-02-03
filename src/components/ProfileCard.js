import React from 'react'
import {Text, Image, View} from 'react-native'

// Styles
import styles from './styles/ProfileCardStyles'

export default function ProfileCard({item}) {
  return (
    <View style={styles.section}>
      <Image source={{uri: item.photo}}
        style={{width: 150, height: 150}} 
      />
      <View style={styles.profile}>
        <View>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            {`${item.first_name} ${item.last_name}`}
          </Text>
          <Text style={{fontSize: 14}}>{`Email: ${item.email}`}</Text>
          <Text style={{fontSize: 14}}>{`Phone: ${item.phone}`}</Text>
        </View>
        <View>
          <Text style={{fontSize: 14}}>Address:</Text>
          <Text style={{fontSize: 14}}>{item.address}</Text>
          <Text style={{fontSize: 14}}>
            {`${item.city}, ${item.state} ${item.zip}`}
          </Text>
        </View>
      </View>
    </View>
  )
}