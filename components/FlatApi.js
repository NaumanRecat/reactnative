import React, { useEffect, useState } from "react";
import { Text, View, Modal, Button, TextInput, ScrollView, FlatList } from 'react-native';

const FlatApi = () => {
    const [show, setShow] = useState([])
    const CallApi = async () => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        let result = await fetch(url)
        result = await result.json()
        setShow(result)
        // console.warn(result)
    }
    useEffect(() => {
        CallApi()
    }, [])
    return (
        <View>
            {
                show.length ? 
                    <FlatList  data={show}
                        renderItem={({item})=> <View>
                            <Text>Id: {item.id}</Text>
                            <Text>Title: {item.title}</Text>
                            <Text>Body: {item.body}</Text>
                        </View> }
                    />
                 : null
            }
        </View>
    )
}
export default FlatApi