import React, {useEffect} from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Splash from '../../assets/jitsilogo.svg'

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('HomeScreen')
        }, 3000)
     }, [navigation])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.splashLogo}>
                <Splash height={160} width={160} />
            </View>
        </SafeAreaView>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    splashLogo: {
        alignSelf: 'center',
        marginVertical: '70%'
    }
})
