import { ISelected } from '../types';

export const noop = (data: any) => data;

export const makeDiv = (params: { id: string }) => {
	const div = document.createElement('div');
	div.id = params.id;
	return div;
};

export const appendElementToBody = (element: HTMLElement) => {
	const body = document.getElementsByTagName('body')[0];
	body.appendChild(element);
};

interface ICheckWinArguments {
	x: number;
	y: number;
	selected: ISelected;
	numberInARow: number;
}

interface ICheckLineArguments {
	x: number;
	y: number;
	dx: number;
	dy: number;
}

export const checkWin = ({
	x,
	y,
	selected,
	numberInARow: N,
}: ICheckWinArguments) => {
	const getFig = ({ x: xCoord, y: yCoord }: { x: number; y: number }) =>
		selected[`${xCoord}:${yCoord}`];

	const newFig = getFig({ x, y });

	const checkLine = ({
		x: xCoord,
		y: yCoord,
		dx,
		dy,
	}: ICheckLineArguments) => {
		let score = 0;
		let localX = xCoord;
		let localY = yCoord;

		while (getFig({ x: localX - dx, y: localY - dy }) === newFig) {
			localX -= dx;
			localY -= dy;
		}

		while (getFig({ x: localX, y: localY }) === newFig) {
			localX += dx;
			localY += dy;
			score += 1;
		}

		if (score === N) {
			return true;
		}
		return false;
	};
	let res = null;

	res = res || checkLine({ x, y, dx: 1, dy: 0 }); // horizontal
	res = res || checkLine({ x, y, dx: 0, dy: 1 }); // vertical
	res = res || checkLine({ x, y, dx: 1, dy: 1 }); // diagonal 45
	res = res || checkLine({ x, y, dx: 1, dy: -1 }); // diagonal 135

	return res;
};
