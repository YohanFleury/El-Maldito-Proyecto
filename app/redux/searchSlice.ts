import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isSearchInputFocus: false
}

export const searchSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setIsPrivateFeed: (state, {payload}) => {
            state.isSearchInputFocus = payload
        },
        
        
    }
})


export const { setIsPrivateFeed } = searchSlice.actions

export default searchSlice.reducer