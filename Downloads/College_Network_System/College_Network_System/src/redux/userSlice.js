import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    role: '',
    name: '',
    email: '',
    photo: '',
    department: '',
    year: '',
    officeHours: '',
  },
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.role = action.payload.role;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
      state.department = action.payload.department;
      state.year = action.payload.year;
      state.officeHours = action.payload.officeHours;
    },
    logout: (state) => {
      state.username = '';
      state.role = '';
      state.name = '';
      state.email = '';
      state.photo = '';
      state.department = '';
      state.year = '';
      state.officeHours = '';
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
