import React from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'
import colors from '../constants/colors'
import fonts from '../constants/fonts'
const textInput = (props) => {
    return (
        <TextInput
        
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        style={[styles.input,{width:props.width ? '44%' : '90%',paddingHorizontal:10}]}>
            
        </TextInput>
    )
}

export default textInput

const styles = StyleSheet.create({
    input:{
        borderColor:colors.grey,
        borderWidth:1,
        alignSelf:'center',
        marginHorizontal:3,
        marginVertical:5,
        fontFamily:fonts.Sofia_Pro_RegularAz,
        color:'black'
    
    }
})
