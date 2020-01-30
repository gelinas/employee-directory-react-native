import React, { Component } from 'react'
import { FlatList, ScrollView, Text, Image,ImageBackground, View } from 'react-native'
import { Images } from '../themes'

// Styles
import styles from './styles/ProtoScreenStyles'

// dummy data
import dummyData from '../prototype/data'

export default class ProtoScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        {/* default darkmode background
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' /> */}
        
        {/* demo launch screen
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              You got your app going with React-Navigation, congrats!
            </Text>
          </View>

        </ScrollView> */}
        
        {/* prototype FlatList */}
        <View style={styles.container}>
          {/* <View style={{flex: 1}}>
            <ImageBackground source={require('../images/navbar.png')} 
            style={{width: '100%', height: 70}}
            />
          </View>
          <View style={{flex: 9}}> */}
            <FlatList
              data={dummyData}
              renderItem={({item}) => 
                // Address card
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
                </View>}
                // <Text style={styles.item}>{item.first_name}</Text>}

              keyExtractor = { (item, index) => index.toString() }
              
            />
          {/* </View> */}
        </View>
      </View>
    )
  }
}
