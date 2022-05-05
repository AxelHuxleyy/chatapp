import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  me:{}
}

export const MeSlice = createSlice({
  name: "me",
  initialState,
  reducers: {
    setMe: (state, action) => {
      state.me = action.payload
    },
  }
})

export const { setMe } = MeSlice.actions
export default MeSlice.reducer