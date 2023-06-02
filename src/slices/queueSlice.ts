import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface QueuedTimer {
	test: 1;
}

interface QueueState {
	timers: QueuedTimer[];
}

const initialState: QueueState = {
	timers: [],
};

export const queueSlice = createSlice({
	name: "queue",
	initialState,
	reducers: {
		addTimer: (state, payload: PayloadAction<number>) => {
			state.timers.push({ test: 1 });
		},
	},
});

export const { addTimer } = queueSlice.actions;

export const selectQueuedTimers = (state: RootState) => state.queue.timers;

export default queueSlice.reducer;
