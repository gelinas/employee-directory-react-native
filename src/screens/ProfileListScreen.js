import React, { useState, useEffect } from 'react'
import { FlatList, SafeAreaView, View, TouchableHighlight } from 'react-native'
import ProfileCard from '../components/ProfileCard'
import {axiosWithAuth} from '../utils/axiosWithAuth'

// Styles
import styles from './styles/ProfileScreenStyles'
import { Colors } from '../themes/'

// dummy data
// import dummyData from '../prototype/data'

export default function ProfileListScreen({navigation}) {

  const [profileList, setProfileList] = useState([])

  useEffect(() => {
      axiosWithAuth().get(
        '/directory'
      ).then(res => {
        setProfileList(res.data)
        // console.log(res)
      }).catch(err => {
        // console.log(err);
      });
    }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* prototype FlatList */}
      <View style={styles.container}>
          <FlatList
            // data={dummyData}
            data={profileList}
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
            keyExtractor = {(item) => item.id.toString() } 
          />
      </View>
    </SafeAreaView>
  )
}
