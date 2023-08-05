import React, { useState } from "react";
import { Text, View, Modal, Button,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const SNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerRight:()=><Button title="Press Me"/>,
                headerLeft:()=><Button title="Press Me"/>,
                headerTitleAlign:'center',
                headerStyle:{backgroundColor:'grey'},
                headerTitleStyle:{fontSize:18},
                headerTintColor:'orange',
            }}>
                <Stack.Screen name='Home' component={Home} options={{
                    title:'Home Screen',
                    headerStyle:{backgroundColor:'skyblue'},
                    headerTitleStyle:{fontSize:18},
                    headerTintColor: 'Orange',
                }}/>
                <Stack.Screen name='About' component={About} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const Home = (props) => {
    const [pass, setPass]=useState("");
    const name = "Nauman";
    const age = 25;
    return (
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
        }}>
            <Text style={{fontSize: 25,}}>Screen no Home</Text>
            {/* <Button title="Open About Us" onPress={()=>props.navigation.navigate("About", {name:"Tariq", age: 30})}/> */}
            <Button title="Open About Us" onPress={()=>props.navigation.navigate("About", {name, age, pass})}/>
            <TextInput style={{
                borderWidth:2,
                marginTop: 10,
            }} placeholder="Type your text here" onChangeText={(text)=>setPass(text)}/>
        </View>
    )
}
const About = (props) => {
    // console.warn(props.route.params)
    const {name, age, pass} = props.route.params;
    return (
        <View>  
            <Text style={{fontSize: 25,}}> Screen no About {pass} </Text>
            <Text style={{fontSize: 25,}}> My name is: {name} </Text>
            <Text style={{fontSize: 25,}}> My age is: {age} </Text>
        </View>
    )
}
export default SNavigation