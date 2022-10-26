import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    userEmail: '',
    confirmEmail: '',
    jwtToken: '',
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
        setUserToken: (state, {payload}) => {
            state.jwtToken = payload
        },
        
    }
})


export const { setUser, setEmailUser, setConfirmEmail, setUserToken } = userSlice.actions

export default userSlice.reducer