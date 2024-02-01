// authSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    userName: "Serhat",
    fullName: "sserhatsel",
    avatar:
      "https://pbs.twimg.com/profile_images/1640100058942038017/Oka0qQvd_400x400.jpg",
  },
  accounts: [
    {
      id: 1,
      userName: "Serhat",
      fullName: "sserhatsel",
      avatar:
        "https://pbs.twimg.com/profile_images/1640100058942038017/Oka0qQvd_400x400.jpg",
    },
    {
      id: 2,
      userName: "Serhat 2",
      fullName: "sserhatsel2",
      avatar:
        "https://www.pngarts.com/files/3/Cool-Avatar-Transparent-Image.png",
    },
  ],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        state.currentAccount = false; // currentState yerine state.currentAccount kullanılmalıdır
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _removeAccount, _setCurrentAccount } =
  authSlice.actions;

export default authSlice.reducer;
