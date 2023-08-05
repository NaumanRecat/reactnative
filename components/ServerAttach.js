import React, { useEffect, useState } from "react";
import { Text, View, Modal, Button, TextInput, ScrollView, FlatList } from 'react-native';

const ServerAttach =()=>{

    const [data, setData]=useState([]);

    const GetApi = async()=>{
        const url="http://10.0.2.2:3000/user";
        let result = await fetch(url);
        result = await result.json()
        setData(result)
        // console.warn(result)
    }

    useEffect(()=>{
        GetApi();
    },[])

    return(
        <View>
            <Text style={{fontSize:20}}> Api Called through Json </Text>
            {
                data.length ? data.map((item)=> <View>
                    <Text> {item.name} </Text>
                    <Text> {item.age} </Text>
                    <Text> {item.email} </Text>
                </View> ) : null
            }
        </View>
    )
}
export default ServerAttach