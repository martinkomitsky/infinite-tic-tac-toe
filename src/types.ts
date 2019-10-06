export interface IIndexedObject {
	[key: string]: any;
}

export type TObjectEntry = [string, any];

export type valueOf<T> = T[keyof T];

declare global {
	const isDev: boolean;
	const C: number;
}
