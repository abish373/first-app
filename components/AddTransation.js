import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { GlobalContext } from '../api/GlobalState'


function AddTransation() {

    const [ text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const { addTransation } = useContext(GlobalContext)

    function handleAddTransationPress() {
        if(text === '' || amount == '') return;

        const obj = {
            id: parseInt(Date.now()),
            text: text,
            amount: parseInt(amount)
        }

        console.log(obj)

        addTransation(obj)
    }

    return (
        <View style={styles.container}>
            <View style={styles.transationContainer}>
                <Text style={styles.transationTxt}>Add Transation</Text>
            </View>
            <View style={styles.formContainer}>
                <View>
                    {/* <Text>Text</Text> */}
                    <View style={styles.textContainer}>
                        <TextInput placeholder="write something" onChangeText={ (e) => setText(e)} />
                    </View>
                    <View style={{...styles.textContainer, ...styles.formContainer}}>
                        <TextInput placeholder="Enter Amount" keyboardType={'numeric'} onChangeText={ (e) => setAmount(e)}/>
                    </View>
                    <TouchableOpacity style={{...styles.formContainer, ...styles.transationBtn }} onPress={ handleAddTransationPress }>
                        <Text style={styles.colorWhite}>Add Transation</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40
    },
    transationTxt: {
        fontSize: 20,
    },
    transationContainer: {
        // border: 2,
        borderBottomColor: 'black'
    },
    text: {
        // border: 2,
        // borderColor: 'black'
    },
    textContainer: {
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        width: 200
    },
    formContainer: {
        marginTop: 20
    },
    transationBtn: {
        backgroundColor: '#9c88ff',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    colorWhite: {
        color: 'white'
    }
})

export default AddTransation
