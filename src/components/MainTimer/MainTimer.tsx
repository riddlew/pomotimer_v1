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
	switchToNextTimer,
	switchToPreviousTimer,
} from "../../slices/timerSlice";
import {
	TimerClockContainer,
	TimerContainer,
	TimerParent,
} from "./MainTimer.styled";
import SquareProgressBar from "./SquareProgressBar";
import TimerButton from "./TimerButton";

export default function MainTimer() {
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
	};

	const handleForward = () => {
		dispatch(switchToNextTimer());
	};

	const handlePrevious = () => {
		dispatch(switchToPreviousTimer());
	};

	useEffect(() => {
		function updateTime() {
			if (isRunning && time > 0) {
				dispatch(setTime(time - 1));
			} else if (isRunning && time <= 0) {
				dispatch(setIsRunning(false));
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
		<TimerParent>
			<TimerContainer>
				<TimerClockContainer>
					<SquareProgressBar percent={progress} />
					<Time time={time} />
				</TimerClockContainer>
				<div
					style={{
						display: "flex",
						justifyContent: "space-around",
						width: "100%",
					}}
				>
					<TimerButton
						clickHandler={handlePrevious}
						icon="bi-arrow-left-circle"
					/>
					<TimerButton
						clickHandler={handlePause}
						icon={isRunning ? "bi-pause-fill" : "bi-play"}
					/>
					<TimerButton
						clickHandler={handleReset}
						icon="bi-arrow-counterclockwise"
					/>
					<TimerButton
						clickHandler={handleForward}
						icon="bi-arrow-right-circle"
					/>
				</div>
			</TimerContainer>
		</TimerParent>
	);
}
