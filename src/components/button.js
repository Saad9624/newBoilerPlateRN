import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import colors from '../constants/colors'
import fonts from '../constants/fonts'

const button = (props) => {
    return (
        <TouchableOpacity 
        
            onPress={()=>props.onPress()}
            style={[styles.btn,{backgroundColor:props.backgroundColor? colors.btnGrey : colors.black}]}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default button

const styles = StyleSheet.create({
    btn:{
        backgroundColor:colors.black,
        width:'90%',
        height:60,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:5
    },
    text:{
        color:'white',
        fontFamily:fonts.Harmonia_Regular,
        fontSize:17
    }
})
