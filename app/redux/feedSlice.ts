import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isPrivateFeed: false
}

export const feedSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setIsPrivateFeed: (state, {payload}) => {
            state.isPrivateFeed = payload
        },
        
        
    }
})


export const { setIsPrivateFeed } = feedSlice.actions

export default feedSlice.reducer