import { createSlice } from '@reduxjs/toolkit';

export const settingSlice = createSlice({
  name: 'settings',
  initialState: {
    repository: '',
    command: '',
    branch: '',
    time: 0
  },
  reducers: {
    updateSetting: (state, action) => {
      return state = { ...action.payload };
    }
  }
});

export const { updateSetting } = settingSlice.actions;

export default settingSlice.reducer;
