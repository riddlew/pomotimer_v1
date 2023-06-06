import styled from "styled-components";
import { breakpoints } from "../../common/breakpoints";

const Text = styled.span`
	font-size: min(20vw, 25vh);
	font-weight: 600;
	color: white;
	z-index: -1;
	text-align: center;
	grid-area: 1 / 1;

	@media screen and (min-width: ${breakpoints.xs}) and (min-height: 400px) {
		font-size: 96px;
		/* padding: 50px; */
	}
`;

const Input = styled.input`
	font-size: min(20vw, 25vh);
	font-weight: 600;
	text-align: center;
	grid-area: 1 / 1;
	margin: 0 auto;
	width: min(65vw, 55vh);
	background-color: transparent;
	border: max(2px, min(2vw, 1.5vh)) dashed white;
	border-radius: max(4px, min(4vw, 4vh));

	@media screen and (min-width: ${breakpoints.xs}) and (min-height: 400px) {
		font-size: 96px;
		width: 300px;
		border-size: 4px;
		border-radius: 12px;
	}
`;

export { Text, Input };
