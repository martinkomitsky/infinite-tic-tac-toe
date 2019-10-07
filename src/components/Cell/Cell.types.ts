export type TCellIndex = [number, number];

export interface ICellProps {
	value?: boolean;
	hint?: boolean;
	index: TCellIndex;
	onClick?: (index: TCellIndex) => void;
}
