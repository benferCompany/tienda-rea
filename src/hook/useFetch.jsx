import { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: null,
  data: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT_REQUEST":
      return {
        loading: true,
        error: null,
        data: null,
      };
    case "REQUEST_FAILURE":
      return {
        loading: false,
        error: action.payload?.error,
        data: null,
      };
    case "REQUEST_SUCCESS":
      return {
        loading: false,
        error: null,
        data: action.payload?.data,
      };
    default:
      return state;
  }
};

export function useGetData(API_URL) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    requestData();
  }, []);

  async function requestData() {
    try {
      dispatch({ type: "INIT_REQUEST" });
      const response = await fetch(API_URL);
      const json = await response.json();

      if (json.error) {
        dispatch({ type: "REQUEST_FAILURE", payload: { error: json.error } });
      } else {
        dispatch({ type: "REQUEST_SUCCESS", payload: { data: json } });
      }
    } catch (e) {
      console.error("Error: ", e);
    }
  }

  return { data: state.data, error: state.error, loading: state.loading };
}
