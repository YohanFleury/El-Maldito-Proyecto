import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isPrivateFeed: false,
    showNewFeedModal: false
}

export const feedSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setIsPrivateFeed: (state, {payload}) => {
            state.isPrivateFeed = payload
        },
        
        setShowNewFeedModal: (state, {payload}) => {
            state.showNewFeedModal = payload
        },
    }
})


export const { setIsPrivateFeed, setShowNewFeedModal } = feedSlice.actions

export default feedSlice.reducer