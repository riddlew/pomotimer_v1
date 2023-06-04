import MainTimer from "./components/MainTimer/MainTimer";
import TimerSidebar from "./components/TimerSidebar/TimerSidebar";

export default function App() {
	return (
		<div
			style={{
				display: "flex",
			}}
		>
			<MainTimer />
			<TimerSidebar />
		</div>
	);
}
