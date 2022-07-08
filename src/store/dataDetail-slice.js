import { createSlice } from "@reduxjs/toolkit";

const dataDetailSlice = createSlice({
  name: "dataDetail",
  initialState: {
    dataDetailShow: false,
  },
  reducers: {
    toogleDataDetailShow(state) {
      state.dataDetailShow = !state.dataDetailShow;
    },
  },
});

export const dataDetailActions = dataDetailSlice.actions;

export default dataDetailSlice;
 