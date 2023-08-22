import React, { useEffect, useState } from "react";
import { Text, View, Modal, Button, TextInput } from 'react-native';

const SearchApi =()=>{

    const[data, setData]=useState([]);

    const SearchApi = async(text)=>{
        const url = `http://10.0.2.2:3000/user?q=${text}`;
        let result = await fetch(url);
        result = await result.json();
        if(result){
            setData(result)
        }
    }
    return(
        <View style={{
            flex:1,
            alignItems:'center',
        }}>
            <TextInput style={{
                borderWidth:1,
                padding:10,
                marginTop:5,
                width:300,
            }} placeholder="Search" 
            onChangeText={(text)=>SearchApi(text)}/>
            {
                data.length ? data.map((item)=><View>
                    <Text>{item.email}</Text>
                    <Text>{item.age}</Text>
                    <Text>{item.name}</Text>
                    </View>) : null
                
            }
        </View>

    )
}
export default SearchApi