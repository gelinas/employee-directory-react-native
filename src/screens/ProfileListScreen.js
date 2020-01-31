import React from 'react'
import { FlatList, View, TouchableHighlight } from 'react-native'
import ProfileCard from '../components/ProfileCard';

// Styles
import styles from './styles/ProfileListScreenStyles'
import { Colors } from '../themes/'

// dummy data
import dummyData from '../prototype/data'

export default function ProfileListScreen({navigation}) {
  return (
    <View style={styles.mainContainer}>
      {/* prototype FlatList */}
      <View style={styles.container}>
          <FlatList
            data={dummyData}
            renderItem={({item}) => 
              <TouchableHighlight
                underlayColor={Colors.steel}
                onPress={() => {
                  navigation.push('Profile', {
                    item: item
                  })
                }}
              >
                <ProfileCard 
                  item={item}
                  navigation={navigation}
                />
              </TouchableHighlight>
            }
            keyExtractor = { (item, index) => index.toString() } 
          />
      </View>
    </View>
  )
}
