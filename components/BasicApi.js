import React, { useEffect, useState } from "react";
import { Text, View, Modal, Button, TextInput } from 'react-native';

const BasicApi = () => {

    const [show, setShow]=useState(undefined);

   const getApi =async()=> {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    let result = await fetch(url);
    result = await result.json()
    setShow(result)
    // console.warn(result)
   }

   useEffect(()=>{
        getApi()
   },[])


//    create varibale store url - create variable and fetch url - await and async for async function
//    convert data into json and store in varibale and the call on state


    return (
       <View>
        {
            show ? <View><Text>{show.title}</Text></View> : null
        }
       </View>
    )
};
export default BasicApi































// import { Text, View, Modal, Button, TextInput } from 'react-native';

// const BasicApi = () => {

//     const [show, setShow]=useState(undefined);

//     const getApi = async () => {
//         const url = "https://jsonplaceholder.typicode.com/posts/1";
//         let result = await fetch(url);
//         result= await result.json()
//         setShow(result)
//     }

//     useEffect(() => {
//         getApi();
//     }, [])


//     return (
//        <View>
//         <Text> Nomi</Text>
//         {
//             show ? <View>
//                 <Text> {show.userId} </Text>
//                 <Text> {show.body} </Text>
//             </View>: null
//         }
//        </View>
//     )
// };
// export default BasicApi