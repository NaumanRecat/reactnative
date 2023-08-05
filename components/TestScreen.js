import React, { useState } from "react";
import { Text, View, Modal, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const TestScreen = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerTitle:()=><Button title="Press"/>,
                headerRight:()=><Button title="Right"/>,
                // headerStyle:{backgroundColor:'pink'},
                headerTintColor:'orange',
                // headerTitleAlign:'center' 
            }} >
                <Stack.Screen name="Home" component={Home} options={{
                    title:'Home Screen',
                    // headerStyle:{backgroundColor:'pink'},
                    headerTintColor:'orange',
                    // headerTitleAlign:'center'
                }} />
                <Stack.Screen name="About" component={About}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const Home = (props) => {
    return (
        <View>
            <Text>
                Yes This is Home Screen
            </Text>
            <Button title="Open About Us" onPress={()=>props.navigation.navigate("About")} />
        </View>
    )
}
const About = (props) => {
    return (
        <View>
            <Text>
                Yes This is About Screen
            </Text>
            <Button title="Open Home" onPress={()=>props.navigation.navigate("Home")} />
        </View>
    )
}
export default TestScreen