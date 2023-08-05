import React, { useState } from "react";
import { Text, View, Modal, Button,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const TabNav =()=>{
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="About" component={About}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
const Home =()=>{
    return(
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
        }}>
            <Text style={{
                fontSize:30,
            }}>
                Home Screen 
            </Text>
        </View>
    )
}
const About =()=>{
    return(
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
        }}>
            <Text style={{
                fontSize:30,
            }}>
                About Screen 
            </Text>
        </View>
    )
}
export default TabNav

















































// import React, { useState } from "react";
// import { Text, View, Modal, Button,TextInput } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

// const TabNav =()=>{
//     return(
//         <NavigationContainer>
//             <Tab.Navigator>
//                 <Tab.Screen name="Home" component={Home}/>
//                 <Tab.Screen name="About" component={About}/>
//             </Tab.Navigator>
//         </NavigationContainer>
//     )
// }
// const Home =()=>{
//     return(
//         <View style={{
//             flex:1,
//             alignItems:'center',
//             justifyContent:'center',
//         }}>
//             <Text style={{
//                 fontSize:30,
//             }}>
//                 Home Screen 
//             </Text>
//         </View>
//     )
// }
// const About =()=>{
//     return(
//         <View style={{
//             flex:1,
//             alignItems:'center',
//             justifyContent:'center',
//         }}>
//             <Text style={{
//                 fontSize:30,
//             }}>
//                 About Screen 
//             </Text>
//         </View>
//     )
// }
// export default TabNav