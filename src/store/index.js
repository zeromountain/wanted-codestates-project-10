import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';

import {searchApi} from '../services/search';
import formSlice from './formSlice';

export const store = configureStore({
  reducer: {
    [searchApi.reducerPath]: searchApi.reducer,
    form: formSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(
      searchApi.middleware,
    ),
});

setupListeners(store.dispatch);
