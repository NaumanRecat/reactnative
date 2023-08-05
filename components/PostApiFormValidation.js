import React, { useEffect, useState } from "react";
import { Text, View, Modal, Button, TextInput, ScrollView, FlatList } from 'react-native';

const PostApiFormValidation = () => {

    const Apicalled = async () => {

        if(!name){
            setnameError(true)
        } else {
            setnameError(false)
        }

        if(!age){
            setageError(true)
        } else {
            setageError(false)
        }

        if(!email){
            setemailError(true)
        } else {
            setemailError(false)
        }



        const url = "http://10.0.2.2:3000/user";
        let result = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({name, age, email})
        });
        result = await result.json();
        if(result){
            console.warn('Data Saved')
        }
    }



    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const [nameError, setnameError] = useState(false);
    const [ageError, setageError] = useState(false);
    const [emailError, setemailError] = useState(false);


    return (
        <View style={{
            alignItems: 'center',
        }}>
            <TextInput style={{
                borderWidth: 1,
                width: 350,
                marginTop: 5,
            }} placeholder="Type your name here" onChangeText={(txt) => setName(txt)} value={name} />
            {nameError ? <View><Text> Please Enter Valid Value </Text></View> : null}

            <TextInput style={{
                borderWidth: 1,
                width: 350,
                marginTop: 5,
            }} placeholder="Type your name here" onChangeText={(txt) => setAge(txt)} value={age} />
            {ageError ? <View><Text> Please Enter Valid Value </Text></View> : null}

            <TextInput style={{
                borderWidth: 1,
                width: 350,
                marginTop: 5,
            }} placeholder="Type your name here" onChangeText={(txt) => setEmail(txt)} value={email} />
            {emailError ? <View><Text> Please Enter Valid Value </Text></View> : null}

            <Button title="Save value to Api" onPress={()=>Apicalled()} />

        </View>
    )
}

export default PostApiFormValidation  