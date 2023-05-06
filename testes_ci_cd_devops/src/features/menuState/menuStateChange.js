import { createSlice } from '@reduxjs/toolkit'

export const menuStatesChange = createSlice({
    name:"menuState",
    initialState:{
        value: false
    },
    reducers:{
        changeTo: function (state) {

            if (state.value === true) {
                //fechou por fora ou pelo icone
                state.value = false
            } else {
                // abriu menu como o icone
                state.value = !state.value
            }
        }
    }
})

export const {changeTo} = menuStatesChange.actions

export default menuStatesChange.reducer