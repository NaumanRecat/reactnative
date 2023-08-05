import React, { useEffect, useState } from "react";
import { Text, View, Modal, Button, TextInput, ScrollView, FlatList } from 'react-native';

const PostApi =()=>{
    const data={
        name: "kinza",
        age: 25,
        email: "kinza@gmail.com",
    }
    const Apipost = async()=>{
        const url = "http://10.0.2.2:3000/user";
        let result = await fetch(url,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        result = await result.json();
        console.warn(result);
    }
    return(
        <View>
            <Text style={{fontSize:25}}> Post Api </Text>
            <Button title="Press me to save value" onPress={()=>Apipost()}/>
        </View>
    )
}
export default PostApi