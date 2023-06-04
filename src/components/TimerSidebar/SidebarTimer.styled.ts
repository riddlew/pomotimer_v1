import styled from "styled-components";
import { breakpoints } from "../../common/breakpoints";

interface TimerLiProps {
	selected: boolean;
}

export const TimerLi = styled.li<TimerLiProps>`
	padding: 12px;
	border: max(2px, min(2vw, 1.5vh)) solid white;
	border-radius: 6px;
	opacity: ${(props) => (props.selected ? 1 : 0.5)};
	cursor: pointer;
	transition: opacity 250ms cubic-bezier(0.165, 0.84, 0.44, 1);

	&:hover {
		opacity: 1;
	}

	@media screen and (min-width: ${breakpoints.xs}) and (min-height: 400px) {
		border: 4px solid white;
	}
`;

export const TimerText = styled.span`
	font-size: min(9vw, 12vh);
	font-weight: 600;
	text-align: center;
	display: block;

	@media screen and (min-width: ${breakpoints.xs}) and (min-height: 400px) {
		font-size: 32px;
	}
`;
