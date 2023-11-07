import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isSignedIn: false,
        userData: null,
        searchInput: "tech",
        blogData: null,
    },
    reducers: {
        setSignedIn: (state, action) => {
            state.isSignedIn = action.payload === "true" ? "true" : "false";
          },
        setInput: (state, action) => {
            state.searchInput = action.payload;
        },
        setBlogData: (state, action) => {
            state.blogData = action.payload;
        },
    }
});

export const { setSignedIn,
    setInput,
    setBlogData, } = userSlice.actions;

export const selectSignedIn = (state) => state.user.isSignedIn;
export const selectBlogData = (state) => state.user.blogData;
export const selectUserInput = (state) => state.user.searchInput;

export default userSlice;