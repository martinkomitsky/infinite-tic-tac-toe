export interface IAppState {
	columns: number;
	initialX: number;
	initialY: number;
	isFinished: boolean;
	isFirstTurn: boolean;
	numberInARow: number;
	rows: number;
	selected: {
		[key: string]: boolean;
	};
	turn: boolean;
}
