import { createSlice } from '@reduxjs/toolkit'

export const menuStatesChange = createSlice({
    name:"menuState",
    initialState:{
        value: false
    },
    reducers:{
        changeTo: (state) => {
            state.value = !state.value
        }
    }
})

export const {changeTo} = menuStatesChange.actions

export default menuStatesChange.reducer