// Redux
import { createSlice } from '@reduxjs/toolkit'

const saveSettingsToLocalStorage = (settings) => {
    const save = JSON.stringify(settings)
    localStorage.setItem('settings', save)
  }

const defaults = {
    theme: 'light',
}

// Slice
export const settingsSlice = createSlice({
    name: 'settings',

    initialState: JSON.parse(localStorage.getItem('settings')) || defaults,

    reducers: {
        // payload is boolean value
        setTheme: (state, { payload }) => {
            state.theme = payload;
            saveSettingsToLocalStorage(state)
        },
    }
})

// Export reducers
export const {
    setTheme,
} = settingsSlice.actions;

export default settingsSlice.reducer;