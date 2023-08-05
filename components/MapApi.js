import React, { useEffect, useState } from "react";
import { Text, View, Modal, Button, TextInput, ScrollView } from 'react-native';

const MapApi = () => {

    const[data, setData]=useState([])

const callApi = async ()=>{
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
     result = await result.json()
     setData(result)
    //  console.warn(result)
}    

useEffect(()=>{
 callApi()
},[])




    return (
        <ScrollView>
            {
                data.length ? data.map((item)=><View style={{
                    padding:10, borderBottomColor:"orange", borderBottomWidth: 2, 
                }}>
                   
                    <Text style={{fontSize:20, backgroundColor:'orange'}}>Id: {item.id} </Text>
                    <Text style={{fontSize:20}}>Title: {item.title} </Text>
                    <Text style={{fontSize:20}}>Body: {item.body} </Text>
                </View>): null
            }
        </ScrollView>
    )
}
export default MapApi