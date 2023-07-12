import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const FontIcon = props => (<FontAwesome {...props} />)
const AntIcon = props => <AntDesign {...props} />
const IonIcon = props => <Ionicons {...props} />
const FeatherIcon = props => <Feather {...props} />
const EvilIcon = props => <EvilIcons {...props} />
const EntypoIcon = props => <Entypo {...props} />
const MaterialIcon = props => <MaterialIcons {...props}/>
const FontIcon5 = props => (<FontAwesome5 {...props} />)

export default {
    FontIcon,
    AntIcon,
    IonIcon,
    FeatherIcon,
    EvilIcon,
    EntypoIcon,
    MaterialIcon,
    FontIcon5
}