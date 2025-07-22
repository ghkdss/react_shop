import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: 'cart',
  initialState: [
    {id:0, title: 'apple', count: 3},
    {id:2, title: 'watermelon', count: 10},
  ],
  reducers: {
    addCount(state, action) {
      state[action.payload].count++;
    },
    addItem(state, action) {
      
      // findIndex함수 : 조건식에 만족하는 인덱스를 리턴, 없으면 -1 리턴
      let index = state.findIndex(data => {
        return data.id == action.payload.id
      })

      if( index !== -1) {
        state[index].count++;
      } else {
        state.push(action.payload);
      }

    },

    removeItem(state, action) {
      state.splice(action.payload, 1);
    }

  }
})

export const { addCount, addItem, removeItem } = cart.actions;
export default cart;