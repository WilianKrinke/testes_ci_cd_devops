import { createSlice } from '@reduxjs/toolkit'

export const menuStatesChange = createSlice({
    name:"menuState",
    initialState:{
        value: false
    },
    reducers:{
        changeTo: function (state,{payload}) {

            console.log(payload)
            if (state.value === true) {
                //fechou por fora ou pelo icone
                state.value = false
            } 
        }
    }
})

export const {changeTo} = menuStatesChange.actions

export default menuStatesChange.reducer