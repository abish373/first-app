import React, { createContext, useReducer } from 'react'
import { View } from 'react-native'




const initialState = {
    transations: [
        { id: 1, text: 'Flowers', amount: -50 },
        { id: 2, text: 'Chicken', amount: -40 },
        { id: 3, text: 'Barotta', amount: -10 },
        { id: 4, text: 'salary', amount: 500 }
    ]
}

function reducer(state, action) {
    switch (action.type) {

        case 'Delete_Transation':
            // console.log('Get in to switc case', state)
            // console.log(action.payload)
            
            console.log({...state, transations: state.transations.filter(v => v.id !== action.payload)})
            return {
                ...state,
                transations: state.transations.filter( v => v.id != action.payload)
            }
        
        case 'Add_Transation':
            return {
                ...state,
                transations: [...state.transations, action.payload]
            }

        default:
            return state;
    }
}

export const GlobalContext = createContext(initialState)


function Provider({ children, style }) {

    const [state, dispatch] = useReducer(reducer, initialState)

    console.log('Global State', state)

    function deleteTransation(id) {
        
        dispatch({
            type: 'Delete_Transation',
            payload: id
        })
    }

    function addTransation(obj) {
        
        dispatch({
            type: 'Add_Transation',
            payload: obj
        })
    }

    

    return (
        <GlobalContext.Provider value={{ transations: state.transations, deleteTransation, addTransation }}>
            <View style={style}>
                {children}
            </View>
        </GlobalContext.Provider>
    )
}

export default Provider