import * as React from 'react';
import * as s from './Layout.module.css';
import * as T from './Layout.types';

const Layout: React.FunctionComponent<T.ILayoutProps> = props => {
	const { children } = props;
	return (
		<main className={s.root}>
			<section className={s.contentWrapper}>
				<div className={s.content}>{children}</div>
			</section>
		</main>
	);
};

export default Layout;
