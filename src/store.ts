import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./slices/timerSlice";
import queueReducer from "./slices/queueSlice";

export const store = configureStore({
	reducer: {
		timer: timerReducer,
		queue: queueReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
