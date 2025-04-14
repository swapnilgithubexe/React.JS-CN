import { createSlice } from "@reduxjs/toolkit";

// import redux toolkit methods here
const INITIAL_STATE = { comments: [], isLoading: false, error: null };

// define comments reducer function here
export const commentsSlice = createSlice({
  name: "comments",
  initialState: INITIAL_STATE,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = !state.isLoading
    },
    setComments: (state, action) => {
      state.comments = [...action.payload]
    },
    setError: (state, action) => {
      state.error = "failed to fetch comments"
    }
  }
})



// export the comments reducer function and action creators here
export const commentsReducer = commentsSlice.reducer;

export const commentActions = commentsSlice.actions;

// export the comments selector function here
export const commentSelector = (state) => state.commentsReducer;
