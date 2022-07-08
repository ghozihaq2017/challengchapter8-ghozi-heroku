import { createSlice } from '@reduxjs/toolkit';

const dataListSlice = createSlice({
  name: 'dataList',
  initialState: {
    items: {},
    dataListShow: true,
  },
  reducers: {
    listCar(state, action) {
      state.items = {
        key: action.payload.id,
        id: action.payload.id,
        image: action.payload.image,
        name: action.payload.name,
        category: action.payload.category,
        price: action.payload.price,
      };
    },
    hideDataList(state) {
      state.dataListShow = false;
    },
  },
});

export const dataListSliceActions = dataListSlice.actions;

export default dataListSlice;
