import {createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import HistoryScreen from '../screens/HistoryScreen'
import HomeScreen from '../screens/HomeScreen'


const Navigator = createStackNavigator({
    'Expense Tracker': HomeScreen,
    History: HistoryScreen
})

export default createAppContainer(Navigator)
