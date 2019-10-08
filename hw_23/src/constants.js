export const INCREMENT = 'increment';
export const SET_DIFFICULTY = 'SET_DIFFICULTY';
export const SET_DURATION = 'SET_DURATION';
export const SET_OPERATION_TYPES = 'SET_OPERATION_TYPES';
export const STOP_TIMER = 'STOP_TIMER';

export const settingsKeys = {
	DURATION: 'duration',
	DIFFICULTY: 'difficulty',
	OPERATION_TYPES: 'operationTypes',
	TIMER: 'timer'
};

export const operations = [
	{
		name: 'Суммирование',
		symbol: '+'
	},
	{ name: 'Разность', symbol: '-' },
	{ name: 'Умножение', symbol: '*' },
	{ name: 'Деление', symbol: '/' },
	{ name: 'Возведение в степень', symbol: '**' }
];
