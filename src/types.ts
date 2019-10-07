export * from './store';

export type valueOf<T> = T[keyof T];

declare global {
	const isDev: boolean;
	const C: number;
}
