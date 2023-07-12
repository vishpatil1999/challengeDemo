import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Union from '../../assests/union.svg';
import Clock from '../../assests/Clock.svg';
import Coin from '../../assests/coin.svg';
import Icon from '../../components/Icon';
import * as Progress from 'react-native-progress';
import CustomBottomSheet from './components/custombottomSheet';


const HomeScreen = () => {
  const refRBSheet = useRef();
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const onCloseModal = () => {
    setShowBottomSheet(false)
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text
        style={styles.headerTitle}>
        Today’s Games
      </Text>
      <View
        style={styles.cardView}>
        <View
          style={styles.innerContainer}>
          <View style={{ flexDirection: 'row', margin: 10 }}>
            <View style={{ width: '50%', flexDirection: 'row' }}>
              <Text
                style={styles.textStyle}>
                UNDER OR OVER
              </Text>
              <Union style={{ marginStart: 6, marginTop: 2 }} />
            </View>
            <View
              style={{
                width: '50%',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <Text
                style={styles.textStyle}>
                Starting in
              </Text>
              <Clock style={{ marginStart: 6, marginTop: 2 }} />
              <Text
                style={[styles.textStyle,{marginStart:5}]}>
                03:23:12
              </Text>
            </View>
          </View>
          <View style={{ margin: 10, width: '70%' }}>
            <Text
              style={{
                color: '#D2BAF5',
                fontSize: 14,
                fontWeight: '600',
                fontStyle: 'normal',
                fontFamily: 'Montserrat-Regular',
              }}>
              Bitcoin price will be under
            </Text>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 14,
                fontWeight: '700',
                fontStyle: 'normal',
                fontFamily: 'Montserrat-Regular',
              }}>
              $24,524 at 7 a ET on 22nd Jan’21
            </Text>
          </View>
        </View>
        <View style={{ backgroundColor: 'white', marginBottom: 20 }}>
          <View style={{ margin: 10 }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <View style={{ marginStart: -25 }}>
                <Text
                  style={{
                    color: '#B5C0C8',
                    fontSize: 12,
                    fontWeight: '500',
                    fontFamily: 'Montserrat-Regular',
                    textAlign: 'left',
                  }}>
                  PRIZE POOL
                </Text>
                <Text
                  style={{
                    color: '#333333',
                    fontSize: 14,
                    fontWeight: '600',
                    fontFamily: 'Montserrat-Regular',
                    marginTop: 3,
                    textAlign: 'left',
                  }}>
                  $12,000
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: '#B5C0C8',
                    fontSize: 12,
                    fontWeight: '500',
                    fontFamily: 'Montserrat-Regular',
                    textAlign: 'left',
                  }}>
                  UNDER
                </Text>
                <Text
                  style={{
                    color: '#333333',
                    fontSize: 14,
                    fontWeight: '600',
                    fontFamily: 'Montserrat-Regular',
                    marginTop: 3,
                    textAlign: 'left',
                  }}>
                  3.25x
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: '#B5C0C8',
                    fontSize: 12,
                    fontWeight: '500',
                    fontFamily: 'Montserrat-Regular',
                    textAlign: 'left',
                  }}>
                  OVER
                </Text>
                <Text
                  style={{
                    color: '#333333',
                    fontSize: 14,
                    fontWeight: '600',
                    fontFamily: 'Montserrat-Regular',
                    marginTop: 3,
                    textAlign: 'left',
                  }}>
                  1.25x
                </Text>
              </View>
              <View style={{ marginEnd: -25 }}>
                <Text
                  style={{
                    color: '#B5C0C8',
                    fontSize: 12,
                    fontWeight: '500',
                    fontFamily: 'Montserrat-Regular',
                    textAlign: 'left',
                  }}>
                  ENTRY FEES
                </Text>
                <View
                  style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <Text
                    style={{
                      color: '#333333',
                      fontSize: 14,
                      fontWeight: '600',
                      fontFamily: 'Montserrat-Regular',
                      marginTop: 3,
                      textAlign: 'right',
                    }}>
                    5
                  </Text>
                  <Coin style={{ marginTop: 5, marginStart: 5 }} />
                </View>
              </View>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text
                style={{
                  color: '#727682',
                  fontSize: 14,
                  fontWeight: '600',
                  fontFamily: 'Montserrat-Regular',
                  textAlign: 'left',
                }}>
                What’s your prediction?
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#452C55',
                    borderRadius: 45,
                    height: 40,
                    width: 147,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <Icon.EntypoIcon
                    name="arrow-down"
                    color={'white'}
                    size={20}
                  />
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 14,
                      fontWeight: '600',
                      fontFamily: 'Montserrat-Regular',
                      textAlign: 'center',
                      margin: 7,
                    }}>
                    Under
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setShowBottomSheet(true)}
                  style={{
                    backgroundColor: '#6231AD',
                    borderRadius: 45,
                    height: 40,
                    width: 147,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <Icon.EntypoIcon name="arrow-up" color={'white'} size={20} />
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 14,
                      fontWeight: '600',
                      fontFamily: 'Montserrat-Regular',
                      textAlign: 'center',
                      margin: 7,
                    }}>
                    Over
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: '#F6F3FA' }}>
          <View style={{ flexDirection: 'row', margin: 10, marginTop: 30 }}>
            <View style={{ width: '50%', flexDirection: 'row', marginStart: 20 }}>
              <Icon.FontIcon name="user" color={'#727682'} size={20} />
              <Text
                style={{
                  color: '#727682',
                  fontSize: 14,
                  fontWeight: '600',
                  fontFamily: 'Montserrat-Regular',
                  textAlign: 'center',
                  marginStart: 20,
                }}>
                355 Players
              </Text>
            </View>
            <View style={{ width: '50%', flexDirection: 'row', marginStart: 20 }}>
              <Icon.FontIcon5 name="chart-area" color={'#727682'} size={20} />
              <Text
                style={{
                  color: '#727682',
                  fontSize: 14,
                  fontWeight: '600',
                  fontFamily: 'Montserrat-Regular',
                  textAlign: 'center',
                  marginStart: 20,
                }}>
                View chart
              </Text>
            </View>
          </View>
          <View style={{ alignSelf: 'center', margin: 10 }}>
            <Progress.Bar
              progress={0.7}
              width={Dimensions.get('window').width - 70}
              color={'#FE4190'}
              unfilledColor={'#2DABAD'}
              height={10}
              borderRadius={10}
              borderWidth={0}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 22,
              alignSelf: 'center',
              marginTop: 10,
              marginBottom: 10,
            }}>
            <View style={{ width: '50%', alignItems: 'flex-start' }}>
              <Text
                style={{
                  color: '#B5C0C8',
                  fontSize: 12,
                  fontWeight: '500',
                  fontFamily: 'Montserrat-Regular',
                }}>
                232 predicted under
              </Text>
            </View>
            <View style={{ width: '50%', alignItems: 'flex-end' }}>
              <Text
                style={{
                  color: '#B5C0C8',
                  fontSize: 12,
                  fontWeight: '500',
                  fontFamily: 'Montserrat-Regular',
                }}>
                123 predicted over
              </Text>
            </View>
          </View>
        </View>
      </View>
      <CustomBottomSheet showBottomSheet={showBottomSheet} onCloseModal={() => onCloseModal()}></CustomBottomSheet>
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  headerTitle: {
    color: '#333333',
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'Avenir Next',
    margin: 10,
  },
  cardView: {
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EEEAF3'
  },
  innerContainer: {
    backgroundColor: '#743CC9',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    paddingBottom: 10,
  },
  textStyle: {
    color: '#D2BAF5',
    fontSize: 12,
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'Montserrat-Regular',
  },
  buttonLabel:{
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    margin: 7,
  }
})
