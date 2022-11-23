import { configureStore } from '@reduxjs/toolkit';
import goodies from './goodiesSlice';
import box from './boxSlice'

export const store = configureStore({
    reducer: {
        goodies,
        box
    },
})