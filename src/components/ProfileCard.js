import React from 'react'
import {Text, Image, View, Button} from 'react-native'
import { Images } from '../themes'

// Styles
import styles from './styles/ProfileCardStyles'

export default function ProfileCard({item}) {
  return (
    <View style={styles.section}>
      <Image source={{uri: item.photo}}
        style={{width: 174, height: 174}} 
      />
      <View style={styles.profile}>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {`${item.first_name} ${item.last_name}`}
          </Text>
          <Text style={{fontSize: 16}}>{`Email: ${item.email}`}</Text>
          <Text style={{fontSize: 16}}>{`Phone: ${item.phone}`}</Text>
        </View>
        <View>
          <Text style={{fontSize: 16}}>Address:</Text>
          <Text style={{fontSize: 16}}>{item.address}</Text>
          <Text style={{fontSize: 16}}>
            {`${item.city}, ${item.state} ${item.zip}`}
          </Text>
        </View>
      </View>
    </View>
  )
}