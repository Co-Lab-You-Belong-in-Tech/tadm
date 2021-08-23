import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {},
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateProfile } = profileSlice.actions

export default profileSlice.reducer