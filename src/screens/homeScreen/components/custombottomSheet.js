import React, { useEffect, useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Modal from 'react-native-modal';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import Coin from '../../../assests/coin.svg';
import GestureRecognizer from 'react-native-swipe-gestures';

export default function custombottomSheet({ showBottomSheet, onCloseModal }) {
    let [showM, setShowM] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [carMake, setCarMake] = React.useState('cadillac');
    const [modelIndex, setModelIndex] = React.useState(3);
    const [data, setData] = useState([
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
    ]);
    const [selectedData, setSelectedData] = useState('');

    return (
        <View>
            <Modal
                isVisible={showBottomSheet}
                onBackButtonPress={() => onCloseModal()}
                animationIn="bounceInUp"
                animationInTiming={1200}
                animationOutTiming={1200}
                style={[{ margin: 0, width: '100%' }]}>
                <View style={styles.modalView}>
                    <GestureRecognizer onSwipeDown={(() => onCloseModal())}>
                        <TouchableOpacity
                            //onPress={() => onCloseModal()}
                            style={{
                                width: '100%',
                                height: 10,
                                marginTop: 10,
                                alignItems: 'center',
                                alignSelf: 'center',
                            }}>
                            <View
                                style={{ backgroundColor: 'grey', width: 80, height: 5 }}></View>
                        </TouchableOpacity>
                    </GestureRecognizer>
                    <View style={{ margin: '5%' }}>
                        <Text
                            style={{
                                color: '#333333',
                                fontSize: 16,
                                fontWeight: '600',
                                fontFamily: 'Montserrat-Regular',
                            }}>
                            Your Prediction is Under
                        </Text>
                        <Text
                            style={{
                                color: '#727682',
                                fontSize: 12,
                                fontWeight: '600',
                                fontFamily: 'Montserrat-Regular',
                                marginTop: 20,
                            }}>
                            Entry tickets
                        </Text>
                        <View>
                            <ScrollView style={{ backgroundColor: 'yellow' }}>
                                <ScrollPicker
                                    dataSource={data}
                                    selectedIndex={1}
                                    style={{ backgroundColor: 'white' }}
                                    itemTextStyle={{
                                        color: '#333333',
                                        fontSize: 14,
                                        fontWeight: '700',
                                    }}
                                    activeItemTextStyle={{
                                        color: '#333333',
                                        fontSize: 14,
                                        fontWeight: '700',
                                        backgroundColor: 'pink',
                                    }}
                                    renderItem={(data, index, isSelected) => {
                                        console.log("data[selectedData]", data[selectedData]);
                                        console.log("Index", index);
                                        console.log("selectedData", selectedData);
                                        return (
                                            <View style={selectedData == index && { backgroundColor: '#e5dff0', width: '100%', alignItems: 'center' }}>
                                                <Text style={selectedData == index ? { color: '#333333', fontSize: 24, fontWeight: '600', fontFamily: 'Montserrat-Regular' } : { color: '#727682', fontSize: 24, fontWeight: '600', fontFamily: 'Montserrat-Regular' }}>{data}</Text>
                                            </View>
                                        );
                                    }}
                                    onValueChange={(data, selectedIndex) => {
                                        setSelectedData(selectedIndex);
                                    }}
                                    wrapperHeight={200}
                                    wrapperWidth={150}
                                    wrapperBackground={'white'}
                                    itemHeight={60}
                                    highlightColor={'white'}
                                    highlightBorderWidth={0}
                                    highlightWidth={20}
                                    activeItemColor={'#222121'}
                                    itemColor={'#B4B4B4'}
                                />
                            </ScrollView>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginTop: '5%',
                                }}>
                                <View>
                                    <Text
                                        style={{
                                            color: '#B5C0C8',
                                            fontSize: 12,
                                            fontWeight: '500',
                                            fontFamily: 'Montserrat-Regular',
                                            marginTop: 3,
                                        }}>
                                        You can win
                                    </Text>
                                    <Text
                                        style={{
                                            color: '#03A67F',
                                            fontSize: 14,
                                            fontWeight: '600',
                                            fontFamily: 'Montserrat-Regular',
                                            marginTop: 3,
                                        }}>
                                        $2000
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text
                                        style={{
                                            color: '#727682',
                                            fontSize: 12,
                                            fontWeight: '500',
                                            fontFamily: 'Montserrat-Regular',
                                            marginTop: 3,
                                        }}>
                                        Total
                                    </Text>
                                    <Coin style={{ marginTop: 5, marginStart: 5 }} />
                                    <Text
                                        style={{
                                            color: '#333333',
                                            fontSize: 14,
                                            fontWeight: '600',
                                            fontFamily: 'Montserrat-Regular',
                                            marginTop: 3,
                                            marginStart: 5,
                                        }}>
                                        5
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => onCloseModal()}
                            style={{
                                backgroundColor: '#6231AD',
                                borderRadius: 45,
                                height: 40,
                                width: '90%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                alignSelf: 'center',
                                marginTop: 15,
                            }}>
                            <Text
                                style={{
                                    color: '#FFFFFF',
                                    fontSize: 14,
                                    fontWeight: '600',
                                    fontFamily: 'Montserrat-Regular',
                                    textAlign: 'center',
                                    margin: 7,
                                }}>
                                Submit my prediction
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
const styles = StyleSheet.create({
    modalView: {
        backgroundColor: 'white',
        width: '100%',
        // alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginTop: 'auto',
        height: '60%',
    },
    item: {
        fontSize: 25,
        color: 'red',
        textAlign: 'left',
        fontWeight: 'bold',
    },
});
