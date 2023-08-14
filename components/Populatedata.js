import React, { useEffect, useState } from "react";
import { Text, View, Modal, Button, TextInput } from 'react-native';
import { widthPercentageToDP as w, heightPercentageToDP as h } from 'react-native-responsive-screen';


const Populatedata = () => {

    const [data, setData] = useState([]);
    const [CloseModal, setCloseModal] = useState(false);
    const [selectedUser, setselectedUser] = useState(undefined);

    const LisApi = async () => {
        const url = "http://10.0.2.2:3000/user";
        let result = await fetch(url);
        result = await result.json();
        // console.warn(result);
        if (result) { setData(result) }
    }

    const deleteUser = async (id) => {
        const url = "http://10.0.2.2:3000/user";
        // console.warn(`${url}/${id}`);
        let result = await fetch(`${url}/${id}`, {
            method: "delete"
        });
        result = await result.json();
        if (result) {
            console.warn("User Delete");
            LisApi()
        }
    }

    const UpdateUser = (data) => {
        setCloseModal(true)
        setselectedUser(data)
    }

    useEffect(() => {
        LisApi();
    }, [])


    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: h('6%'), width: w('100%'), alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 25 }}> List of Api </Text>
            </View>
            {data.length ? data.map((item) => <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: h('2%') }}>
                <View style={{ height: h('8%'), width: w('90%'), borderWidth: 1, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, flex: 1 }} >{item.id}</Text>
                    <Text style={{ fontSize: 20, flex: 1 }} >{item.name}</Text>
                    <Text style={{ fontSize: 20, flex: 1 }} >{item.age}</Text>
                    <View style={{
                        marginRight: h('1%'),
                        flexDirection: 'row',
                    }}>
                        <Button title="Delete" onPress={() => deleteUser(item.id)} />
                    </View>
                    <Button title="Update" onPress={() => UpdateUser(item)} />
                </View>
            </View>) : null}
            <Modal visible={CloseModal} transparent={true} set >
                <UserModal setCloseModal={setCloseModal} selectedUser={selectedUser} />
            </Modal>
        </View>
    )
}
const UserModal = (props) => {
    // console.warn(props.selectedUser)

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();

    useEffect(()=>{
        if(props.selectedUser){
            setName(props.selectedUser.name);
            setEmail(props.selectedUser.email);
            setAge(props.selectedUser.age.toString());
        }
    },[props.selectedUser])

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <View style={{
                backgroundColor: '#fff',
                padding: 27,
                borderRadius: 10,
                shadowColor: '#000',
                shadowOpacity: 0.70,
                elevation: 7,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <TextInput style={{
                    borderWidth: 1,
                    width: 300,
                    marginBottom: 5,
                }} placeholder="Type your name" value={name} />
                <TextInput style={{
                    borderWidth: 1,
                    width: 300,
                    marginBottom: 5,
                }} placeholder="Type your email" value={email} />
                <TextInput style={{
                    borderWidth: 1,
                    width: 300,
                    marginBottom: 5,
                }} placeholder="Type your age" value={age}  />

                <View style={{
                    marginBottom: 5,
                }}>
                <Button title="Update Modal"/>
                </View>

                <Button title="Close Modal   " onPress={() => props.setCloseModal(false)} />
            </View>
        </View>
    )
}
export default Populatedata