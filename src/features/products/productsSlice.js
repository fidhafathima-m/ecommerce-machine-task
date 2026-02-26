import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts", 
    async (page = 1) => {
        const limit = 10;
        const skip = (page - 1) * limit;
        const response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
        return response.data
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        total: 0,
        loading: false
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.loading = true
        }) 
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload.products;
            state.total = action.payload.total;
        })
    }
})

export default productsSlice.reducer;