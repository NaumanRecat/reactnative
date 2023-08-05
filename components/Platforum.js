import React, { useState } from "react";
import {Text, View, Platform, Button} from 'react-native';

const Platforum =()=>{
    return(
        <View>
            <Text style={{
                fontSize:25,
            }}> Platform: {Platform.OS} </Text>
            {
               Platform.OS==="android" ?
               <View style={{
                   height:120,
                   width:120,
                   backgroundColor:'blue',
               }}/> : <View style={{
                height:120,
                width:120,
                backgroundColor:'green',
            }}/>
            }
            <Text style={{
                color:Platform.OS=="android" ? "orange" : "blue",
                fontSize: Platform.OS=="android" ? 32 : 20,
            }}> Lets Change the Color of Text </Text>
            <Text> {JSON.stringify()} </Text>
        </View>
    )
}
export default Platforum