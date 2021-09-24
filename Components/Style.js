import React from "react";
import { StyleSheet } from "react-native";
import { Icon } from 'react-native-elements'


const estilo = StyleSheet.create({
    View:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#009BFF'
    },
    Text:{
        color: 'white',
        fontSize: 50
    },
    TextInput:{
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 50,
        marginBottom: 10
    }
})

export default estilo;