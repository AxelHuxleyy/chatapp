import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  action: {
    type: "",
    idConversation: "",
    idFriend: "",
  },
}

export const actionSlice = createSlice({
  name: "action",
  initialState,
  reducers: {
    setAction: (state, action) => {
      state.action.type = action.payload
    },
    setIdConversation: (state, action) => {
      state.action.idConversation = action.payload
    },
    setIdFriend: (state, action) => {
      state.action.idFriend = action.payload
    }
  }
})

export const { setAction, setIdConversation, setIdFriend } = actionSlice.actions
export default actionSlice.reducer