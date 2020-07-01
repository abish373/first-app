import React, { useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { GlobalContext } from '../api/GlobalState'

function IncomeExpense() {

    const { transations } = useContext(GlobalContext)

    const income = transations.map(v => v.amount).filter(v => v > 0).reduce((acc, curval) => acc += curval, 0)
    const expense = transations.map(v => v.amount).filter(v => v < 0).reduce((acc, curval) => acc += curval, 0)

    return (
        <View style={styles.container}>
            <View>
                <Text>Income</Text>
                <Text style={styles.plus}>${income}</Text>
            </View>
            <View>
                <Text>Expense</Text>
                <Text style={styles.minus}>-${expense}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20,
        justifyContent: 'space-around',
        flexDirection: 'row',
        margin: 10,

    },
    plus: {
        color: '#2ecc71',
    },
    minus: {
        color: '#c0392b'
    }

})

export default IncomeExpense
