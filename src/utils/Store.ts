import { configureStore, createSlice } from '@reduxjs/toolkit';
const initialState = { value: { username: "" } }
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.value = action.payload
        },
        removeName: (state) => {
            state.value = initialState.value
        }
    }
})
export const { setName, removeName } = userSlice.actions
export const store = configureStore({ reducer: { user: userSlice.reducer } })