import { configureStore } from '@reduxjs/toolkit'
import menuStatesChange from '../features/menuState/menuStateChange'

export default configureStore({
    reducer: {
        menuState: menuStatesChange
    }
})