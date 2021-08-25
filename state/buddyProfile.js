import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {},
}

export const buddyProfileSlice = createSlice({
  name: 'buddyProfile',
  initialState,
  reducers: {
    updateBuddyProfile: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateBuddyProfile } = buddyProfileSlice.actions

export default buddyProfileSlice.reducer