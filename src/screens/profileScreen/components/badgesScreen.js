import React, { useState } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import ListIcon from '../../../assests/listIcon.svg';

export default function BadgesScreen() {
  const [badges, setBagdes] = useState([
    {
      id: 1,
      title: 'First Stripe Earned',
      description: 'Top 10% of highest spending players in a month',
      key: 'x 3'
    },
    {
      id: 2,
      title: 'Born winner',
      description: 'Top 10% of highest spending players in a month',
    },
    {
      id: 3,
      title: 'Trader of month',
      description: 'Top 10% of highest spending players in a month',
    },
    {
      id: 4,
      title: 'Rising Star',
      description: 'Top 10% of highest spending players in a month',
    },
    {
      id: 4,
      title: 'Jackpot',
      description: 'Top 10% of highest spending players in a month',
    },
  ]);
  return (
    <SafeAreaView style={{backgroundColor:'#e5dff0'}}>
      <FlatList
        data={badges}
        contentContainerStyle={{ paddingBottom: '20%',paddingTop:10}}
        renderItem={({ item }) => (
          <View
            style={{
              margin: 10,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#EEEAF3',
              padding: 10,
              backgroundColor:'white',
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: '30%' }}>
                <ListIcon />
              </View>
              <View style={{ width: '70%' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    style={{
                      color: '#333333',
                      fontSize: 14,
                      fontWeight: '600',
                      fontStyle: 'normal',
                      fontFamily: 'Montserrat-Regular',
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      color: '#FFA600',
                      fontSize: 14,
                      fontWeight: '600',
                      fontStyle: 'normal',
                      fontFamily: 'Montserrat-Regular',
                      marginStart: 10
                    }}>
                    {item.key}
                  </Text>
                </View>
                <Text
                    style={{
                      color: '#727682',
                      fontSize: 14,
                      fontWeight: '500',
                      fontStyle: 'normal',
                      fontFamily: 'Montserrat-Regular',
                      marginTop:5
                    }}>
                    {item.description}
                  </Text>
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
