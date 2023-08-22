import React, { useEffect, useRef, useState } from "react";
import { Text, View, Modal, Button, TextInput } from 'react-native';

const UseReff =()=>{
    const input = useRef();

    const Pressme = ()=>{
        input.current.focus();
        input.current.setNativeProps({
            fontsize:24
        })
    }

    return(
        <View style={{
            alignItems:'center'
        }} >
            <TextInput ref={input}   style={{ borderWidth:1, marginBottom:15, marginTop:15, width:300}} placeholder="Type your name" />
            <TextInput style={{ borderWidth:1, width:300, marginBottom:10 }} placeholder="Type your email" />
            <Button title=" Press me" onPress={Pressme}/>
        </View>
    )
}
export default UseReff