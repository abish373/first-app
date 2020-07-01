import React, { useContext, useState } from 'react'
import {  StyleSheet } from 'react-native'
import Provider, { GlobalContext } from '../api/GlobalState'
import HistoryItem from '../components/HistoryItem'




const HistoryScreen = (props) => {

    return (
        <Provider>
            <HistoryItem />
        </Provider>
    )
}

const styles = StyleSheet.create({
   
    
    

})

export default HistoryScreen
