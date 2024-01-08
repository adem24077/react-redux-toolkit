import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: any[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<any>) => {
      //state.items.push(action.payload);

      let product = state.items.find((c) => c.product.id === action.payload.id);
      if (product) {
        product.quantity++;
      } else {
        state.items.push({ quantity: 1, product: action.payload });
      }
    },
    removeItem: (state, action: PayloadAction<any>) => {
      state.items = state.items.filter((item) => item !== action.payload);
    },
    clearCart: (state, action: PayloadAction<any>) => {
      //state.items = [];

      return {
        ...state,
        cartItems: state.items.filter(
          (c) => c.product.id !== action.payload.id
        ),
      };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
