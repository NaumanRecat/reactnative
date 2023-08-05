import React, { useState } from "react";
import {Text, View, Modal, Button} from 'react-native';
import {WebView} from 'react-native-webview'

const Web =()=>{
    return(
        <View style={{
            flex:1,
        }}>
            <WebView source={{uri:"https://worldanimalfoundation.org/"}} />
        </View>
    )
}
export default Web