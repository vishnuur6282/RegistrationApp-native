import {createSlice} from '@reduxjs/toolkit';
import {FormValuesType} from '../../../screens/registration';

interface stateType {
  users: FormValuesType[];
  currentUser: FormValuesType;
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState: <stateType | any>{
    users: [],
    currentUser: {},
  },
  reducers: {
    onSigningUp: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {onSigningUp, setCurrentUser} = counterSlice.actions;

export default counterSlice.reducer;
