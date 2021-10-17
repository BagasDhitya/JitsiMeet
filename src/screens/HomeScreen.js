import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../components/Button'
import Jitsi from '../jitsi/Jitsi'

const HomeScreen = () => {

    const [joinMeeting, setJoinMeeting] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            {
                joinMeeting ? (<Jitsi />) :
                    (<View style={styles.buttonLayout}>
                        <Button onPress={() => setJoinMeeting(true)} />
                    </View>)
            }

        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    buttonLayout: {
        marginVertical: '50%',
        alignSelf: 'center'
    }
})
