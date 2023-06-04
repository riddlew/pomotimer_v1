import MainTimer from "./components/MainTimer/MainTimer";
import TimerSidebar from "./components/TimerSidebar/TimerSidebar";
import * as SC from "./App.styled";

export default function App() {
	return (
		<SC.MobileContainer>
			<MainTimer />
			<TimerSidebar />
		</SC.MobileContainer>
	);
}
