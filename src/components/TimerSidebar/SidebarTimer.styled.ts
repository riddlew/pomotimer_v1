import styled from "styled-components";

interface TimerLiProps {
	selected: boolean;
}

export const TimerLi = styled.li<TimerLiProps>`
	padding: 12px;
	border: 1px solid white;
	border-radius: 6px;
	opacity: ${(props) => (props.selected ? 1 : 0.5)};
	cursor: pointer;
`;

export const TimerText = styled.span`
	font-size: 32px;
	font-weight: 600;
	text-align: center;
	display: block;
`;
