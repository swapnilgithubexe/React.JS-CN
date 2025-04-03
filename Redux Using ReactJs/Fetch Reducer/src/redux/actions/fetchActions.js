// todo constants
export const FETCH_LOADING = "Fetch Loading";
export const FETCH_SUCCESS = "Fetch Success";
export const FETCH_ERROR = "Fetch Error";

// action creators
export const fetchLoading = () => ({ type: FETCH_LOADING });
export const fetchSuccess = (data) => ({ type: FETCH_SUCCESS, payload: data });
export const fetchError = (error) => ({ type: FETCH_ERROR, payload: error });
