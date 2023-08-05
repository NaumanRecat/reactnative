import React, { useState } from "react";
import {Text, View, Modal, Button, Pressable} from 'react-native';

const Press =()=>{
    return(
      <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
      }}>
        <Pressable 
        onPress={()=>console.warn("Onpress")}
        onLongPress={()=>{console.warn("Long Press")}}
        onPressIn={()=>{console.warn("onPressIn")}}
        onPressOut={()=>{console.warn("onPressOut")}}
        >
            <Text style={{
                backgroundColor:'green',
                padding:30,
                borderRadius:15,
                fontSize:30
            }}> Pressable</Text>
        </Pressable>
      </View>
    )
}
export default Press