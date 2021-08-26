import { configureStore } from '@reduxjs/toolkit'
import profileReducer from '../state/profile.js'
import buddyProfileReducer from '../state/buddyProfile.js'

export const store = configureStore({
  reducer: {
      profile: profileReducer,
      buddyProfile: buddyProfileReducer,
  },
})