import { useEffect, useState } from "react";
import Time from "./Time";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
	resetTime,
	selectIsRunning,
	selectStartTime,
	selectTime,
	setIsRunning,
	setTime,
} from "../../slices/timerSlice";
import CircularProgressBar from "./CircularProgressBar";

// interface MainTimerProps {
// 	time: number;
// 	isRunning: boolean;
// 	handlePause: () => void;
// 	addTimeFn: (n: number) => void;
// }

// export default function MainTimer({
// time,
// addTimeFn,
// isRunning,
// handlePause,
// }: MainTimerProps) {
export default function MainTimer() {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const menuItems = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
	// const menuItems = [5, 10, 15, 20, 25];

	const dispatch = useAppDispatch();
	const time = useAppSelector(selectTime);
	const startTime = useAppSelector(selectStartTime);
	const isRunning = useAppSelector(selectIsRunning);
	const [progress, setProgress] = useState(100);

	const handlePause = () => {
		dispatch(setIsRunning(!isRunning));
	};

	const handleReset = () => {
		dispatch(resetTime(startTime));
		dispatch(setIsRunning(false));
	};

	useEffect(() => {
		function updateTime() {
			if (isRunning && time > 0) {
				dispatch(setTime(time - 1));
			}
		}
		const interval = setInterval(updateTime, 1000);
		return () => {
			clearInterval(interval);
		};
	}, [time, isRunning, dispatch]);

	useEffect(() => {
		setProgress((time / startTime) * 100);
	}, [time, startTime]);

	return (
		<div>
			<Time time={time} />
			<button type="button" onClick={handlePause}>
				{isRunning ? "Pause" : "Play"}
			</button>
			<button type="button" onClick={handleReset}>
				Reset
			</button>
			<CircularProgressBar percent={progress} />
		</div>
	);
}
