import React, { useState, useEffect } from 'react'
import { Alert, FlatList, SafeAreaView, Text, View, TouchableHighlight } from 'react-native'
import { withNavigationFocus } from 'react-navigation';
import ProfileCard from '../components/ProfileCard'
import {axiosWithAuth} from '../utils/axiosWithAuth'

// Styles
import styles from './styles/ProfileScreenStyles'
import { Colors } from '../themes/'

// dummy data
// import dummyData from '../prototype/data'

function ProfileListScreen({navigation, isFocused}) {

  const [profileList, setProfileList] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)

  useEffect(() => {
    if(isFocused){
      axiosWithAuth().get(
        '/directory'
      ).then(res => {
        setLoading(false)
        setProfileList(res.data)
      }).catch(err => {
        const {response} = err;
        setError(true)
        Alert.alert(`Error status code "${response.status}" with message "${response.data.message}" and error "${response.data.error}"`)
      });
    }
    }, [isFocused]);

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

export default withNavigationFocus(ProfileListScreen)