import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TestStateInterface {
  value: number;
}

const initialState: TestStateInterface = {
  value: 0,
};

export const testSlice = createSlice({
  name: "testing_slice",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { increment } = testSlice.actions;
export default testSlice.reducer;
