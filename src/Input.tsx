import react from "react"
import { TextInput, View } from "react-native"

const InputMob = ()=>{
    return <View>
        <TextInput
        placeholder="Email"
        style={{ borderColor:"black", borderWidth:1, fontSize:25,padding:15,borderRadius:5}}
         />
    </View>
}

export default InputMob