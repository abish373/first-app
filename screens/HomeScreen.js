import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, } from 'react-native'
import IncomeExpense from '../components/IncomeExpense'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import AddTransation from '../components/AddTransation'
import Provider from '../api/GlobalState'

const HomeScreen = (props) => {
    return (
        <Provider style={styles.container}>

            <IncomeExpense />
            <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('History')}>
                <View>
                    <Text>See Transation History</Text>
                </View>
            </TouchableOpacity>
            <AddTransation />

        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        width: 250,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#f39c12',
    }
})

export default HomeScreen
