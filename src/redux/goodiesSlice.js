import { createSlice } from '@reduxjs/toolkit'

export const goodiesSlice = createSlice({
    name: 'goodies',
    initialState: {
        selectedCategory: "SEAFOOD"
    },
    reducers: {
filterCategory: (state, action) => {
    state.selectedCategory = action.payload;
}
    }
})


export const getSelectedCategory = state => state.goodies.selectedCategory;
export const {filterCategory} = goodiesSlice.actions;
export default goodiesSlice.reducer;