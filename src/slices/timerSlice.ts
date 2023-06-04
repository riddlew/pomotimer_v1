import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface Timer {
	time: number;
	startTime: number;
}

interface TimerState {
	currentTimerIdx: number;
	isRunning: boolean;
	timerQueue: Timer[];
}

const initialState: TimerState = {
	currentTimerIdx: 0,
	isRunning: false,
	timerQueue: [
		{
			time: 5,
			startTime: 5,
		},
		{
			time: 5,
			startTime: 5,
		},
		{
			time: 5,
			startTime: 5,
		},
		{
			time: 5,
			startTime: 5,
		},
		{
			time: 10,
			startTime: 10,
		},
		{
			time: 20,
			startTime: 20,
		},
	],
};

export const timerSlice = createSlice({
	name: "timer",
	initialState,
	reducers: {
		setTime: (state, action: PayloadAction<number>) => {
			state.timerQueue[state.currentTimerIdx].time = action.payload;
		},
		resetTime: (state, action: PayloadAction<number>) => {
			state.timerQueue[state.currentTimerIdx].time = action.payload;
			state.timerQueue[state.currentTimerIdx].startTime = action.payload;
			state.isRunning = false;
		},
		setIsRunning: (state, action: PayloadAction<boolean>) => {
			state.isRunning = action.payload;
		},
		setCurrent: (state, action: PayloadAction<number>) => {
			state.currentTimerIdx = action.payload;
		},
		switchToNextTimer: (state) => {
			if (state.currentTimerIdx < state.timerQueue.length - 1) {
				state.currentTimerIdx++;
			} else {
				state.timerQueue[state.currentTimerIdx].time = 0;
			}
			state.isRunning = false;
		},
		switchToPreviousTimer: (state) => {
			state.timerQueue[state.currentTimerIdx].time =
				state.timerQueue[state.currentTimerIdx].startTime;
			state.isRunning = false;

			if (state.currentTimerIdx > 0) {
				state.currentTimerIdx--;
				state.timerQueue[state.currentTimerIdx].time =
					state.timerQueue[state.currentTimerIdx].startTime;
			}
		},
	},
});

export const {
	setTime,
	resetTime,
	setIsRunning,
	switchToNextTimer,
	switchToPreviousTimer,
} = timerSlice.actions;

export const selectTime = (state: RootState) =>
	state.timer.timerQueue[state.timer.currentTimerIdx].time;
export const selectStartTime = (state: RootState) =>
	state.timer.timerQueue[state.timer.currentTimerIdx].startTime;
export const selectIsRunning = (state: RootState) => state.timer.isRunning;
export const selectTimerQueue = (state: RootState) => state.timer.timerQueue;
export const selectRunningIdx = (state: RootState) =>
	state.timer.currentTimerIdx;

export default timerSlice.reducer;
