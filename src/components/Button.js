import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>Join Meeting</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 50,
        backgroundColor: '#1D76BC',
        borderRadius:10,
    },
    text:{
        marginVertical:13,
        alignSelf:'center',
        color:'white',
        fontSize:18
    }
})
