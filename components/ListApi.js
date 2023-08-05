import React, { useEffect, useState } from "react";
import { Text, View, Modal, Button, TextInput, ScrollView, FlatList } from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';


const ListApi = () => {

    const [data, setData] = useState([]);

    const LisApi = async () => {
        const url = "http://10.0.2.2:3000/user";
        let result = await fetch(url);
        result = await result.json();
        // console.warn(result);
        if (result) { setData(result) }
    }

    useEffect(() => {
        LisApi();
    }, [])


    return (
        <View style={{flex:1}}>
            <View style={{ height:h('6%'), width:w('100%'), alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontSize: 25}}> List of Api </Text>
            </View>
            {data.length ? data.map((item) => <View style={{ alignItems:'center', justifyContent:'center', marginBottom: h('2%')}}>
                <View style={{ height:h('8%'), width:w('90%'), borderWidth:1, borderRadius: 10, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                <Text style={{fontSize: 20, flex:1}} >{item.id}</Text>
                <Text style={{fontSize: 20, flex:1}} >{item.name}</Text>
                <Text style={{fontSize: 20, flex:1}} >{item.age}</Text>
                <View style={{
                    marginRight: h('1%'),
                    flexDirection:'row',
                }}>
                <Button title="Delete"/>
                </View>
                <Button title="Update"/>
            </View>
            </View>) : null}
        </View>
    )
}
export default ListApi