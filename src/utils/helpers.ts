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

interface TSelected {
	[key: string]: boolean;
}

interface ICheckWindowArguments {
	x: number;
	y: number;
	selected: TSelected;
	numberInARow: number;
}

export const checkWin = ({
	x,
	y,
	selected,
	numberInARow: N,
}: ICheckWindowArguments) => {
	const getFig = ({ x: xCoord, y: yCoord }: { x: number; y: number }) =>
		selected[`${xCoord}:${yCoord}`];

	const newFig = getFig({ x, y });

	const checkLine = (x: number, y: number, dx: number, dy: number) => {
		let score = 0;
		console.group(dx, dy);
		console.log('checking', x, y);

		while (getFig({ x: x - dx, y: y - dy }) === newFig) {
			x -= dx;
			y -= dy;
			console.log(x, y, '-');
		}

		while (getFig({x, y}) === newFig) {
			console.log(x, y, '+');
			x += dx;
			y += dy;
			score++;
		}

		if (score === N) {
			console.groupEnd();
			return true;
		}
		console.groupEnd();
		return false;
	};
	let res = null;

	res = res || checkLine(x, y, 1, 0); // horizontal
	res = res || checkLine(x, y, 0, 1); // vertical
	res = res || checkLine(x, y, 1, 1); // diagonal 45
	res = res || checkLine(x, y, 1, -1); // diagonal 135

	return res;
};
