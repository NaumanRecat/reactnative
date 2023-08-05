import React, { useState } from "react";
import { Text, View, Modal, Button,TextInput } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const StackNav =()=>{
    const Stack=createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{
                    title:'Home Screen',
                    headerStyle:{backgroundColor:'skyblue'}
                }} />
                <Stack.Screen name='About' component={About} />
                <Stack.Screen name='Profile' component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const Home =(props)=>{
    var name='Nauman';
    var age= 25;
    var email = 'nauman@gmail.com';
    const [ pass1, setPass2]=useState();

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
            <TextInput placeholder="Type here" onChangeText={(txt)=>setPass2(txt)}/>
            <Button title="Login" onPress={()=>props.navigation.navigate("About", {name,age,email, pass1})} />
        </View>
    )
}
const About =(props)=>{
    // console.warn(props.route.params)
    const {name, age, email, pass1} = props.route.params
    const [ pass, setPass]=useState('Empty');
    return(
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
        }}>
            <Text style={{
                fontSize:30,
                fontWeight:'bold',
                marginBottom: 25,
            }}>
                About Screen {pass1}
            </Text>
            <Text style={{fontSize:22}}> My Name: {pass} </Text>
            <Text style={{fontSize:22}}> My Name is: {name} </Text>
            <Text style={{fontSize:22}}> My Age is: {age} </Text>
            <Text style={{fontSize:22}}> My Email is: {email} </Text>
            <Button title="Update Screen" onPress={()=>setPass('Nauman Tariq')}/>
            <Button title="Profile" onPress={()=>props.navigation.navigate("Profile", {name, pass})} />
        </View>
    )
}
const Profile =(props)=>{
    // console.warn(props.route.params)
    const {name, pass} = props.route.params
    return(
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
        }}>
            <Text style={{
                fontSize:30,
            }}>
                Profile Screen {pass}
            </Text>
            <Text style={{fontSize:22}}> My Name is: {name} </Text>
            <Button title="Home"/>
        </View>
    )
}
export default StackNav