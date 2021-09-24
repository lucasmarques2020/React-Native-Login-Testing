import React from "react";
import { Text, View, TextInput, Button} from "react-native"

import estilo from "./Style"

export default ()=>{
    return(
        <View style={estilo.View}>
            <Text style={estilo.Text}>LOGO</Text>
            <TextInput placeholder="Usuário" style={estilo.TextInput}/>
            <TextInput placeholder="Senha" style={estilo.TextInput}/>
            <Button title="Press me" onPress={() => Alert.alert('Simple Button pressed')}/>
        </View>
    )
    
}