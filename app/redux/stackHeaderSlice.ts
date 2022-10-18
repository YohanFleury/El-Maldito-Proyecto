import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    stackHome: true
}

export const stackHeaderSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setShowStackHome: (state, {payload}) => {
            state.stackHome = payload
        },
        
        
    }
})


export const { setShowStackHome } = stackHeaderSlice.actions

export default stackHeaderSlice.reducer