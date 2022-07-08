import { configureStore } from '@reduxjs/toolkit';

import dataListSlice from './dataList-slice';
import dataDetailSlice from './dataDetail-slice';

const store = configureStore({
  reducer: {
    dataList: dataListSlice.reducer,
    dataDetail: dataDetailSlice.reducer,
  },
});

export default store;
