import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    userEmail: '',
    confirmEmail: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, {payload}) => {
            state.user = payload
            console.log('from the reducer',state.user)
        },
        setEmailUser: (state, {payload}) => {
            state.userEmail = payload
            
        },
        setConfirmEmail: (state, {payload}) => {
            state.confirmEmail = payload
            
        },
        
    }
})


export const { setUser, setEmailUser, setConfirmEmail } = userSlice.actions

export default userSlice.reducer