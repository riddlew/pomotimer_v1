import MainTimer from "./components/MainTimer/MainTimer";
import { useAppSelector } from "./hooks/redux";
import { selectRunningIdx, selectTimerQueue } from "./slices/timerSlice";
import formatTime from "./common/helpers/formatTime";

export default function App() {
	const timers = useAppSelector(selectTimerQueue);
	const currentIdx = useAppSelector(selectRunningIdx);

	return (
		<div
			style={{
				display: "flex",
			}}
		>
			<MainTimer />
			<div
				style={{
					margin: "20px",
					padding: "10px 20px",
				}}
			>
				<ul
					style={{
						padding: "0",
						listStyle: "none",
						minWidth: "200px",
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
						gap: "8px",
					}}
				>
					{timers.map((timer, i) => (
						<li
							style={{
								padding: "12px",
								border: "1px solid white",
								borderRadius: "6px",
								opacity: currentIdx === i ? 1 : 0.5,
							}}
						>
							<span
								style={{
									fontSize: "32px",
									fontWeight: 600,
									textAlign: "center",
									display: "block",
								}}
							>
								{formatTime(timer.startTime)}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
