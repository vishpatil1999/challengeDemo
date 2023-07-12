import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import GamesPlayedScreen from './components/gamesPlayedScreen';
import BadgesScreen from './components/badgesScreen';
import Icon from '../../components/Icon';
import LeftHeader from '../../assests/leftHeader.svg';
import Comment from '../../assests/comment.svg';
import User from '../../assests/User.svg';
import Edit from '../../assests/Edit.svg';
import Logo from '../../assests/profilelogo.svg'
import Arrowup from '../../assests/arrowup.svg'
import Arrowdown from '../../assests/arrowdown.svg'

function ProfileScreen({ navigation, route }) {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(
    route.params?.index ? route.params.index : 0,
  );
  const [imgData, setImgData] = useState('');

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () =>
  //     <Icon.FontIcon name="user" color={'black'} />
  //   })
  // }, [navigation])

  const [routes] = useState([
    { key: 'first', title: 'Games Played' },
    { key: 'second', title: 'Badges' },
  ]);
  const renderScene = ({ route }) => {
    if (route.key == 'first' && index == 0) {
      return <GamesPlayedScreen navigation={navigation} />;
    }
    if (route.key == 'second' && index == 1) {
      return <BadgesScreen navigation={navigation} />;
    }
  };

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#6231AD' }}
      style={{ backgroundColor: 'white' }}
      renderLabel={({ route, focused }) => (
        <Text
          style={
            focused
              ? {
                color: '#6231AD',
                margin: 8,
                fontSize: 15,
                fontWeight: '500',
                fontFamily: 'Montserrat-Regular',
              }
              : {
                color: '#727682',
                margin: 8,
                fontSize: 15,
                fontWeight: '500',
                fontFamily: 'Montserrat-Regular',
              }
          }>
          {route.title}
        </Text>
      )}
    />
  );

  // TabView Function
  const TabViewFunction = () => {
    return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ backgroundColor: 'white', flex: 7 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '5%',
          }}>
          <View style={{ alignSelf: 'center', marginStart: '4%' }}>
            <LeftHeader></LeftHeader>
          </View>
          <View>
            <Text
              style={{
                color: '#727682',
                fontSize: 14,
                fontWeight: '500',
                alignSelf: 'center',
                marginTop: 5,
                fontFamily: 'Montserrat-Regular',
              }}>
              Profile
            </Text>
          </View>
          <View style={{ alignSelf: 'center', marginEnd: '4%' }}>
            <Comment></Comment>
          </View>
        </View>
        <View style={{ justifyContent: 'center', alignContent: 'center' }}>
          <User
            width={90}
            height={90}
            style={{ alignSelf: 'center', marginTop: '3%' }}
          />
          <View style={styles.profileImgUploadBtn}>
            <Edit width={30} height={30} />
          </View>
        </View>
        <View style={{ alignContent: 'center', marginTop: 5 }}>
          <Text
            style={{
              color: '#333333',
              fontSize: 14,
              fontWeight: '500',
              alignSelf: 'center',
              marginTop: 5,
              fontFamily: 'Montserrat-Regular',
            }}>
            Jina Simons
          </Text>
          <Text
            style={{
              color: '#333333',
              fontSize: 14,
              fontWeight: '500',
              alignSelf: 'center',
              marginTop: 5,
              fontFamily: 'Montserrat-Regular',
            }}>
            6000 Pts
          </Text>
          <View style={{ marginStart: 12, marginEnd: 12, marginTop: 2 }}>
            <Text
              style={{
                color: '#727682',
                fontSize: 14,
                fontWeight: '500',
                alignSelf: 'center',
                marginTop: 5,
                fontFamily: 'Montserrat-Regular',
                textAlign: 'left',
              }}>
              I’m a software developer that has been in the crypto space since
              2012. And I’ve seen it grow and falter over a period of time.
              Really happy to be here!
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '4%' }}>
          <TouchableOpacity style={{ flexDirection: 'row', width: 79 }}>
            <Icon.FontIcon name="sign-out" color={'#727682'} size={25} />
            <Text
              style={{
                color: '#333333',
                fontSize: 14,
                fontWeight: '500',
                alignSelf: 'center',
                fontFamily: 'Montserrat-Regular',
                marginStart: 10
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ borderColor: '#EEEAF3', borderRadius: 5, borderWidth: 1, marginTop:'10%',marginHorizontal:15,paddingBottom:15}}>
          <View style={{alignSelf:'center',top:-15,backgroundColor:'white'}}>
            <Logo width={30} height={31}/>
          </View>
          <View style={{ flexDirection: 'row'}}>
            <View style={{width: '50%',alignItems:'center'}}>
              <Text style={{
                color: '#727682',
                fontSize: 14,
                fontWeight: '600',
                alignSelf: 'center',
                fontStyle:'normal',
                fontFamily: 'Montserrat-Regular',
                textAlign:'center',
                marginBottom:8
              }}>Under or Over</Text>
              <View style={{flexDirection:'row'}}>
              <Arrowup width={30} height={31}/>
              <Text style={{
                color: '#4F4F4F',
                fontSize: 24,
                fontWeight: '700',
                alignSelf: 'center',
                fontStyle:'normal',
                fontFamily: 'Montserrat-Regular',
                marginStart: 10
              }}>81%</Text>
              </View>
            </View>
            <View style={{width: '50%',alignItems:'center' }}>
              <Text style={{
                color: '#727682',
                fontSize: 14,
                fontWeight: '600',
                fontStyle:'normal',
                fontFamily: 'Montserrat-Regular',
                textAlign:'left',
                marginBottom:8,
                marginStart:-40
              }}>Top 5</Text>
              <View style={{flexDirection:'row'}}>
              <Arrowdown width={30} height={31}/>
              <Text style={{
                color: '#4F4F4F',
                fontSize: 24,
                fontWeight: '700',
                alignSelf: 'center',
                fontStyle:'normal',
                fontFamily: 'Montserrat-Regular',
                marginStart: 10
              }}>-51%</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{flex:4}}>
      {TabViewFunction()}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profileImgContainer: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
    backgroundColor: 'yellow',
  },
  profileImg: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    borderWidth: 1.5,
    borderColor: '#ffffff80',
  },
  profileImgUploadBtn: {
    position: 'absolute',
    right: '35%',
    top: '60%',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});

export default ProfileScreen;
