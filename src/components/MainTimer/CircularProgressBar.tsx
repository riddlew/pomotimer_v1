import { ProgressBarSvg } from "./CircularProgressBar.styled";

interface CircularProgressBarProps {
	percent: number;
}

export default function CircularProgressBar({
	percent,
}: CircularProgressBarProps) {
	return (
		<ProgressBarSvg viewBox="0 0 80 80">
			<path
				className="track"
				d="M5,40a35,35 0 1, 0 70, 0a35,35 0 1, 0 -70,0"
			/>
			<path
				className="fill"
				d="M5,40a35,35 0 1, 0 70, 0a35,35 0 1, 0 -70,0"
				style={{
					strokeDashoffset: ((100 - percent) / 100) * -220,
				}}
			/>
		</ProgressBarSvg>
	);
}
