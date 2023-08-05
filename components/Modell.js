import React, { useState } from "react";
import {Text, View, Modal, Button} from 'react-native';

const Modell =()=>{
    const [model, setModel] = useState(false)
    return(
        <View>
            <View>
                <Modal 
                transparent={true}
                visible={model}
                >
                    <View style={{
                        alignItems:'center',
                        justifyContent:'center',
                        marginTop: 300,
                    }}>
                        <Text> Here is the popup Model</Text>
                        <Button title="Close the Modal" onPress={()=>setModel(false)} />
                    </View>
                </Modal>
            </View>
            <View>
                <Button title="Show Model" onPress={()=>setModel(true)}/>
            </View>
        </View>
    )
}
export default Modell