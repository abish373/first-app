import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { GlobalContext } from '../api/GlobalState';


function Item({ text, amount, id }) {

    const { deleteTransation } = useContext(GlobalContext)

    return (

        <View style={styles.container}>
            <View style={{ backgroundColor: '#eaecee', ...styles.commonFlex, flex: 2 }}>
                <Text>{text}</Text>
            </View>
            <View style={{ backgroundColor: amount > 0 ? '#58d68d' : '#ec7063', ...styles.commonFlex }}>
                <Text>{amount}</Text>
            </View>
            <TouchableOpacity style={styles.btnContainer}
             onPress={() => {
                deleteTransation(id)
                
            }}>
                <View style={styles.center}>
                    <Text style={{ color: 'white' }}>
                        X
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}




function HistoryItem() {

    const {  transations } = useContext(GlobalContext)


    console.log("In History Item", transations)

    return transations.map( (v,i) => {
        return <Item text={v.text} amount={v.amount} id={v.id} key={i} />
    })
    
    // return (

        
    //     <FlatList
    //             data={transations}
    //             renderItem={({ item }) => <Item text={item.text} amount={item.amount} id={item.id} />}
    //             keyExtractor={item => {
    //                 // console.log('Key extractor', item.id)
    //                 return toString(item.id)

    //             }
    //             }
    //         />        
    // )
    
    
}

export default HistoryItem;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // borderWidth: 2,
        // borderColor: 'black',
        margin: 10,
        height: 50,
        alignItems: 'center'

    },
    commonFlex: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnContainer: {
        backgroundColor: '#a04000',
        flex: 1,
        width: 40,
        borderWidth: 2,
        borderColor: "#943126"
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    }
})