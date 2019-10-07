import classnames from 'classnames';
import * as React from 'react';
import * as s from './Cell.module.css';
import * as T from './Cell.types';

export const Cell: React.FunctionComponent<T.ICellProps> = props => {
	const { value, onClick, hint, index } = props;

	const handleClick = () => {
		if (onClick) {
			onClick(index);
		}
	};

	const classNames = classnames(s.cellIcon, {
		// tslint:disable-next-line: no-boolean-literal-compare
		[s.cellCircle]: value === false,
		[s.cellCross]: value,
	});

	return (
		<div
			className={classnames(s.cell, { [s.cellOutlined]: hint })}
			onClick={handleClick}
		>
			<div className={classNames} />
		</div>
	);
};
