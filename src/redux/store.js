import { configureStore } from '@reduxjs/toolkit';
import settingReducer from './settingSlice';

export default configureStore({
  reducer: {
    settings: settingReducer
  },
});
