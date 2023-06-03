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

export { Text };
