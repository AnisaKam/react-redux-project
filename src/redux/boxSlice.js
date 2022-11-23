import { createSlice } from '@reduxjs/toolkit'

export const boxSlice = createSlice({
    name: 'box',
    initialState: {
        boxItems: []
    },
    reducers: {
        addItemToBox: (state, action) => {
            const timeId = new Date().getTime()
            state.boxItems.push({
                id: timeId,
                goodId: action.payload.good.id,
                number: action.payload.number,
                totalPrice: action.payload.number * action.payload.good.price
            })
        },
        removeItemFromBox: (state, action) => {
            state.boxItems = state.boxItems.filter(
                boxItem => boxItem.id !== action.payload.boxItemId
            )
        }
    }
})

export const getTotalPrice = state => {
    return state.box.boxItems.reduce((total, boxItems) => {
        return boxItems.totalPrice + total
    }, 0)
}


export const getBoxItems = state => state.box.boxItems;
export const { addItemToBox, removeItemFromBox } = boxSlice.actions;
export default boxSlice.reducer;