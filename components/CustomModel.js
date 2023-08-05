import React, { useState } from "react";
import { Text, View, Modal, Button } from 'react-native';
import { widthPercentageToDP as w, heightPercentageToDP as h } from 'react-native-responsive-screen';

const CustomModel = () => {
    const [show, setShow] = useState(false)
    return (
        <View style={{
            flex: 1,
            // backgroundColor:'pink',
            justifyContent: 'flex-end',
        }}>

            <Modal
                transparent={false}
                visible={show}
            >
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    //  backgroundColor:'blue',
                    backgroundColor: 'rgba(50,50,50,.3)'
                }}>
                    <View style={{
                        height: h('25%'),
                        width: w('80%'),
                        backgroundColor: "white",
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 15,
                    }}>
                        <Text>
                            Nomi
                        </Text>
                        <Button title="Close Model" onPress={() => setShow(false)} />
                    </View>
                </View>
            </Modal>


            <View>
                <Button title="Open Model" onPress={() => setShow(true)} />
            </View>

        </View>
    )
}
export default CustomModel