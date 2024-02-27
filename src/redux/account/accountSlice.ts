import { createSlice } from "@reduxjs/toolkit";

interface AccountState {
  isAuthenticated: boolean;
  user: {
    _id: string;
    email: string;
    fullname: string;
    avatar: string;
    role: {
      _id: string;
      name: string;
    };
  };
}

const initialState: AccountState = {
  isAuthenticated: false,
  user: {
    _id: "",
    email: "",
    fullname: "",
    avatar: "",
    role: {
      _id: "",
      name: "",
    },
  },
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    doLoginAction: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },

    doGetAccountAction: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },

    doLogoutAction: (state) => {
      state.isAuthenticated = false;
      state.user = {
        _id: "",
        email: "",
        fullname: "",
        avatar: "",
        role: {
          _id: "",
          name: "",
        },
      };
      localStorage.removeItem("access_token");
    },
  },

  extraReducers: () => {
    // Định nghĩa các extra reducers ở đây
  },
});

export const { doLoginAction, doGetAccountAction, doLogoutAction } =
  accountSlice.actions;

export default accountSlice.reducer;
