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
	editing: boolean;
}

const initialState: TimerState = {
	currentTimerIdx: 0,
	isRunning: false,
	timerQueue: [
		{
			time: 3,
			startTime: 3,
		},
		{
			time: 5,
			startTime: 5,
		},
		{
			time: 6,
			startTime: 6,
		},
		{
			time: 7,
			startTime: 7,
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
	editing: false,
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
			state.timerQueue[state.currentTimerIdx].time =
				state.timerQueue[state.currentTimerIdx].startTime;
			state.isRunning = false;
		},
		switchToNextTimer: (state) => {
			if (state.currentTimerIdx < state.timerQueue.length - 1) {
				state.currentTimerIdx++;
			} else {
				state.currentTimerIdx = 0;
			}

			state.timerQueue[state.currentTimerIdx].time =
				state.timerQueue[state.currentTimerIdx].startTime;
			state.isRunning = false;
		},
		switchToPreviousTimer: (state) => {
			state.timerQueue[state.currentTimerIdx].time =
				state.timerQueue[state.currentTimerIdx].startTime;
			state.isRunning = false;

			if (state.currentTimerIdx > 0) {
				state.currentTimerIdx--;
			} else {
				state.currentTimerIdx = state.timerQueue.length - 1;
			}

			state.timerQueue[state.currentTimerIdx].time =
				state.timerQueue[state.currentTimerIdx].startTime;
		},
		addTimer: (state, action: PayloadAction<number>) => {
			state.timerQueue.push({
				time: action.payload,
				startTime: action.payload,
			});
			state.currentTimerIdx = state.timerQueue.length - 1;
			state.editing = true;
			state.isRunning = false;
		},
		deleteCurrentTimer: (state) => {
			if (state.timerQueue.length === 1) return;

			state.isRunning = false;
			state.timerQueue.splice(state.currentTimerIdx, 1);

			if (state.currentTimerIdx > state.timerQueue.length - 1) {
				state.currentTimerIdx--;
			}
		},
		toggleEdit: (state) => {
			state.editing = !state.editing;
		},
	},
});

export const {
	setTime,
	resetTime,
	setIsRunning,
	setCurrent,
	switchToNextTimer,
	switchToPreviousTimer,
	addTimer,
	deleteCurrentTimer,
	toggleEdit,
} = timerSlice.actions;

export const selectTime = (state: RootState) =>
	state.timer.timerQueue[state.timer.currentTimerIdx].time;
export const selectStartTime = (state: RootState) =>
	state.timer.timerQueue[state.timer.currentTimerIdx].startTime;
export const selectIsRunning = (state: RootState) => state.timer.isRunning;
export const selectTimerQueue = (state: RootState) => state.timer.timerQueue;
export const selectRunningIdx = (state: RootState) =>
	state.timer.currentTimerIdx;
export const selectEditing = (state: RootState) => state.timer.editing;

export default timerSlice.reducer;
