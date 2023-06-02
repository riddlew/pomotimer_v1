import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface TimerState {
	time: number;
	startTime: number;
	isRunning: boolean;
}

const initialState: TimerState = {
	time: 10,
	startTime: 10,
	isRunning: false,
};

export const timerSlice = createSlice({
	name: "timer",
	initialState,
	reducers: {
		setTime: (state, action: PayloadAction<number>) => {
			state.time = action.payload;
		},
		resetTime: (state, action: PayloadAction<number>) => {
			state.time = action.payload;
			state.startTime = action.payload;
		},
		setIsRunning: (state, action: PayloadAction<boolean>) => {
			state.isRunning = action.payload;
		},
	},
});

export const { setTime, resetTime, setIsRunning } = timerSlice.actions;

export const selectTime = (state: RootState) => state.timer.time;
export const selectStartTime = (state: RootState) => state.timer.startTime;
export const selectIsRunning = (state: RootState) => state.timer.isRunning;

export default timerSlice.reducer;
