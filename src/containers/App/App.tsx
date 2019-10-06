// import classnames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';
import { Card } from '../../components/Card';
import { Cell } from '../../components/Cell';
import { IAppStore, initialState, setAppState } from '../../store';
import '../../types';
import { checkWin } from '../../utils';
import Layout from '../Layout';
import * as s from './App.module.css';
import * as T from './App.types';

class App extends React.Component<T.IAppProps, {}> {
	public handleClick = (index: [number, number]) => {
		console.log(index);
		const { appState } = this.props;
		if (!appState) {
			return null;
		}
		const {
			turn,
			selected,
			isFirstTurn,
			numberInARow,
			isFinished,
		} = appState;
		const [x, y] = index;
		const coordinates = `${x}:${y}`;

		if (selected[coordinates] === undefined && !isFinished) {
			const newState = {
				isFinished: false,
				selected: { ...selected, [coordinates]: turn },
				turn: !turn,
			};

			const winner = checkWin({
				numberInARow,
				x,
				y,
				selected: newState.selected,
			});

			newState.isFinished = winner;

			if (isFirstTurn) {
				if (x === 0 && y === 0) {
					this.setAppState({ ...newState, isFirstTurn: false });
				}
			} else {
				this.setAppState(newState);
			}

			if (winner) {
				console.log(`${turn ? 'cross' : 'circle'} is a winner!`);
				setTimeout(() => {
					this.resetState();
				}, 2500);
			}
		}
	};

	private setAppState = (state: any) => {
		const { setAppState: setState } = this.props;
		if (setState) {
			setState(state);
		}
	};

	private resetState = () => this.setAppState(initialState);

	public renderColumns = (rowIndex: number) => {
		const { appState } = this.props;
		if (!appState) {
			return null;
		}
		const { columns, initialY, isFirstTurn, selected } = appState;
		const columnElements: React.ReactElement[] = [];

		let colIndex = initialY;
		for (colIndex; colIndex < columns + initialY; colIndex = colIndex + 1) {
			const showHint = isFirstTurn && rowIndex === 0 && colIndex === 0;
			columnElements.push(
				<Cell
					key={colIndex}
					hint={showHint}
					index={[rowIndex, colIndex]}
					value={selected[`${rowIndex}:${colIndex}`]}
					onClick={this.handleClick}
				/>
			);
		}

		return columnElements;
	};

	public renderRows = () => {
		const { appState } = this.props;
		if (!appState) {
			return null;
		}
		const { rows, initialX } = appState;

		const jsx: React.ReactElement[] = [];

		let rowIndex = initialX;
		for (rowIndex; rowIndex < rows + initialX; rowIndex = rowIndex + 1) {
			jsx.push(
				<div className={s.row} key={rowIndex}>
					{this.renderColumns(rowIndex)}
				</div>
			);
		}

		return jsx;
	};

	public handleInputChange = (
		type: string,
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const value = event.target.value;
		if (type === 'x') {
			this.setAppState({
				initialX: +value,
			});
		} else {
			this.setAppState({
				initialY: +value,
			});
		}
	};

	public handleNumberInARowChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const value = +event.target.value;
		this.setAppState({
			numberInARow: value > 0 ? value : 1,
		});
	};

	public handleXchange = this.handleInputChange.bind(null, 'x');
	public handleYchange = this.handleInputChange.bind(null, 'y');

	public render() {
		console.log(this.props);
		const { appState } = this.props;
		if (!appState) {
			return null;
		}
		const { initialX, initialY, numberInARow, isFirstTurn } = appState;

		return (
			<div className={s.app}>
				<div className={s.container}>
					<Layout>
						<Card>
							<React.Fragment>
								{this.renderRows()}
								<div className={s.inputContainer}>
									<input
										type="number"
										value={initialX}
										onChange={this.handleXchange}
									/>
									<input
										type="number"
										value={initialY}
										onChange={this.handleYchange}
									/>
									<input
										type="number"
										min="1"
										value={numberInARow}
										onChange={this.handleNumberInARowChange}
										disabled={!isFirstTurn}
									/>
								</div>
							</React.Fragment>
						</Card>
					</Layout>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: IAppStore) => {
	return { ...state };
};

export default connect(
	mapStateToProps,
	{ setAppState }
)(App);
