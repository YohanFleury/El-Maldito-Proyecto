import { configureStore } from '@reduxjs/toolkit'
import feedSlice from './feedSlice'
import stackHeaderSlice from './stackHeaderSlice'
import userSlice from './userSlice'


export const store = configureStore({
    reducer: {
        user: userSlice,
        stackHeader: stackHeaderSlice,
        feed: feedSlice
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch