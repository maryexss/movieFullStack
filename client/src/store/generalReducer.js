import { createSlice } from '@reduxjs/toolkit';

const generalSlice = createSlice({
    name: 'general',
    initialState: {
        theme: "light",
    },
    reducers: {
        changeTheme: (state, action) => {
            state.theme = action.payload;
            localStorage.setItem("theme", action.payload);
        },
        loadThemeFromLocalStorage: (state, action) => {
            state.theme = localStorage.getItem("theme") || "light";
        },
    },
});

export let { changeTheme, loadThemeFromLocalStorage } = generalSlice.actions;

export default generalSlice.reducer;