import { AnimatePresence } from "framer-motion";
import { Menu } from "./AddTimeMenu.styled";
import AddTimeBtn from "./AddTimeBtn";

interface AddTimeMenuProps {
	addTimeFn: (n: number) => void;
	isOpen: boolean;
	items: (number | string)[];
	spreadAmount: number;
}

function getBtnRotation(index: number, totalItems: number, spread: number) {
	return 180 - ((totalItems / 2) * spread - spread / 2) + spread * index;
}

export default function AddTimeMenu({
	addTimeFn,
	isOpen,
	items,
	spreadAmount,
}: AddTimeMenuProps) {
	return (
		<Menu>
			<AnimatePresence>
				{isOpen &&
					items.map((_, i) => (
						<AddTimeBtn
							key={`${i}-addtimerbtn`}
							addTimeFn={() => addTimeFn((i + 1) * 5)}
							value={(i + 1) * 5}
							rotation={getBtnRotation(
								i,
								items.length,
								spreadAmount
							)}
						/>
					))}
			</AnimatePresence>
		</Menu>
	);
}
