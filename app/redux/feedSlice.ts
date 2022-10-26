import { createSlice } from '@reduxjs/toolkit'

type initialStateProps = {
    isPrivateFeed: boolean;
    showNewFeedModal: boolean;
    imagesUris: string[]
}

const initialState: initialStateProps = {
    isPrivateFeed: false,
    showNewFeedModal: false,
    imagesUris: []
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

        addImageUri: (state, {payload}) => {
           if (state.imagesUris.length < 2) state.imagesUris.push(payload)
        },

        deleteImageUri: (state, {payload}) => {
            state.imagesUris.map((uri: string, index: number) => {
                if(uri === payload) state.imagesUris.splice(index, 1)
            })
        },

        resetImagesUris: (state) => {
            state.imagesUris = []
        },

    }
})


export const { 
    setIsPrivateFeed, 
    setShowNewFeedModal, 
    addImageUri, 
    resetImagesUris,
    deleteImageUri
} = feedSlice.actions

export default feedSlice.reducer