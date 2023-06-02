import styled from "styled-components";

export const ProgressBarSvg = styled.svg`
	width: 400px;
	height: 400px;
	position: absolute;

	& .track,
	& .fill {
		fill: transparent;
		stroke-width: 4;
		transform: rotate(90deg) translate(0px, -80px);
	}

	& .track {
		stroke: transparent;
	}

	& .fill {
		stroke: white;
		stroke-dasharray: 220;
		stroke-dashoffset: -220;
		transition: stroke-dashoffset 500ms;
	}
`;
