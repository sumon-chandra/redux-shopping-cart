import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  SUCCESS: "success",
  ERROR: " error",
  LOADING: "loading",
});
const initialState = {
  data: [],
  status: STATUSES.SUCCESS,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

const api = "https://fakestoreapi.com/products";
export function fetchProducts() {
  return async function fetchProductsThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch(api);
      const data = await res.json();
      dispatch(setProducts(data));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
