import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
  },
});

export const sendCartData = (cartData) => {
  return async (dispatchAction) => {
    dispatchAction(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data to server ....",
      })
    );

    const sendRequest = async () => {
      const res = await fetch(
        "https://react-http-by-dk-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartData),
        }
      );

      if (!res.ok) {
        throw new Error("Sending cart data failed!!!");
      }
    };

    try {
      await sendRequest();

      dispatchAction(
        uiActions.showNotification({
          status: "success",
          title: "success",
          message: `Sent cart data to server success....`,
        })
      );
    } catch (err) {
      dispatchAction(
        uiActions.showNotification({
          status: "error",
          title: "Error !!!",
          message: `${err} \nCan't send cart data to server ....`,
        })
      );
    }
  };
};

export default cartSlice;

export const cartActions = cartSlice.actions;
