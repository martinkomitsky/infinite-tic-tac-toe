import * as React from 'react';
import * as s from './Card.module.css';
import * as T from './Card.types';

export const Card: React.FunctionComponent<T.ICardProps> = props => {
	const { children } = props;

	return (
		<div className={s.card}>
			<div className={s.cardContainer}>{children}</div>
		</div>
	);
};
