import styled from "styled-components";
import { breakpoints } from "../../common/breakpoints";

export const BarSvg = styled.svg`
	grid-area: 1 / 1;
	width: min(100vw, 100vh);
	height: min(75vw, 75vh);

	@media screen and (min-width: ${breakpoints.xs}) and (min-height: 400px) {
		width: 400px;
		height: 300px;
	}

	& .track,
	& .fill {
		fill: transparent;
		stroke-width: 4;
	}

	& .track {
		stroke: transparent;
	}

	& .fill {
		stroke: white;
		stroke-dasharray: 240;
		stroke-dashoffset: -240;
		transition: stroke-dashoffset 500ms;
	}
`;
