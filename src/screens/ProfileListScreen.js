import React, { useState, useEffect } from 'react'
import { FlatList, View, TouchableHighlight } from 'react-native'
import ProfileCard from '../components/ProfileCard';
import axios from 'axios';

// Styles
import styles from './styles/ProfileScreenStyles'
import { Colors } from '../themes/'

// dummy data
// import dummyData from '../prototype/data'

export default function ProfileListScreen({navigation}) {

  const [profileList, setProfileList] = useState([])

  useEffect(() => {
      axios.get(
        'https://directory-rest.herokuapp.com/api/directory'
      ).then(res => {
        setProfileList(res.data)
        // console.log(res)
      }).catch(err => {
        // console.log(err);
      });
    }, []);

  return (
    <View style={styles.mainContainer}>
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
            keyExtractor = { (item, index) => index.toString() } 
          />
      </View>
    </View>
  )
}
