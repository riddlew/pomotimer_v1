import styled from "styled-components";
import { motion, HTMLMotionProps } from "framer-motion";

interface TimerLiProps extends HTMLMotionProps<"li"> {
	rotation: number;
}

interface ButtonProps extends HTMLMotionProps<"button"> {
	rotation: number;
}

export const TimerLi = styled(motion.li)<TimerLiProps>`
	width: 100%;
	height: 100%;
	position: absolute;
`;

export const Button = styled(motion.button)<ButtonProps>`
	position: absolute;
	border-radius: 9999px;
	width: 80px;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	font-weight: 800;
	color: #357dd2;
	background-color: #fff;
	border: 0;

	&:hover {
		background-color: rgb(230, 230, 230);
		cursor: pointer;
	}
`;
