import React, { useState } from "react";
import {Text, View, Modal, Button, StatusBar} from 'react-native';

const Status =()=>{
    return(
        <View>
            <StatusBar
            backgroundColor={'red'}
            barStyle={'dark-content'}
            hidden={false}
            />
        </View>
    )
}
export default Status