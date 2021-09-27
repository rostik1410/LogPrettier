const panelStyles = bgColor => {
	return `background: ${bgColor}; padding: 10px; color: white; border-radius: 5px;`;
};

const titleStyles = color => {
	return `color: ${color}; margin-left: 10px;`;
};

export class Logger {
	static _messageFormatter = (color, panelTitle, args) => {
		const panel = panelStyles(color);
		const title = titleStyles(color);
		return ['%c%s%c%s%c', panel, panelTitle, title, args[0], ...args];
	};

	static info = (...args) => {
		const title = '😀 Info';
		const params = this._messageFormatter('SeaGreen', title, args);
		console.info(...params);
	};

	static debug = (...args) => {
		const title = '🐛 Debug';
		const params = this._messageFormatter('MediumPurple', title, args);
		console.debug(...params);
	};

	static error = (...args) => {
		const title = '💩 Error';
		const params = this._messageFormatter('Red', title, args);
		console.error(...params);
	};
}

/**
 * Prettier for console logs
 * Using examples
 *
		Logger.info('Some Info Text', someData);
		Logger.debug('Some Debug Text', {someFirstData, someSecondData});
		Logger.error('Some Error Text', someData);
 */
