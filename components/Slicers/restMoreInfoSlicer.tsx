import { createSlice } from '@reduxjs/toolkit'

export const restMoreInfoSlice = createSlice({
  name: 'restmoreinfo',
  initialState: {
    value: ""
  },
  reducers: {
    setRestInfo: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRestInfo } = restMoreInfoSlice.actions

export default restMoreInfoSlice.reducer
