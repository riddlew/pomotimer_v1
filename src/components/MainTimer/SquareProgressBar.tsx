import { BarSvg } from "./SquareProgressBar.styled";

interface SquareProgressBarProps {
	percent: number;
}

export default function SquareProgressBar({ percent }: SquareProgressBarProps) {
	return (
		<BarSvg viewBox="10 10 60 60">
			<path
				className="track"
				d="M 40 15 L 9 15 C 6 15 3 18 3 21 L 3 59 C 3 62 6 65 9 65 L 71 65 C 74 65 77 62 77 59 L 77 21 C 77 18 74 15 71 15 L 40 15"
			/>
			<path
				className="fill"
				d="M 40 15 L 9 15 C 6 15 3 18 3 21 L 3 59 C 3 62 6 65 9 65 L 71 65 C 74 65 77 62 77 59 L 77 21 C 77 18 74 15 71 15 L 40 15"
				style={{
					strokeDashoffset: ((100 - percent) / 100) * -240,
				}}
			/>
		</BarSvg>
	);
}
