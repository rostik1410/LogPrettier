import { defaultConfig } from './config';

const panelStyles = (bgColor) => {
	return `background: ${bgColor}; padding: 10px; color: white; border-radius: 5px;`;
};

const titleStyles = (color) => {
	return `color: ${color}; margin-left: 10px;`;
};

export class Logger {
	constructor() {
		this.config = { ...defaultConfig };
	}

	/**
	 *
	 *
	 * @param {object} userConfig
	 * example
	 * @memberof Logger
	 */
	init(userConfig) {
		this.config = { ...defaultConfig, ...userConfig };
	}

	_messageFormatter = (color, panelTitle, args) => {
		const panel = panelStyles(color);
		const title = titleStyles(color);
		return ['%c%s%c%s%c', panel, panelTitle, title, ...args];
	};

	info = (...args) => {
		const params = this._messageFormatter(this.config.infoBackgroundColor, this.config.infoTitle, args);
		console.info(...params);
	};

	debug = (...args) => {
		const params = this._messageFormatter(this.config.debugBackgroundColor, this.config.debugTitle, args);
		console.debug(...params);
	};

	warn = (...args) => {
		const params = this._messageFormatter(this.config.warnBackgroundColor, this.config.warnTitle, args);
		console.warn(...params);
	};

	error = (...args) => {
		const params = this._messageFormatter(this.config.errorBackgroundColor, this.config.errorTitle, args);
		if (this.config.errorTracebackOn) {
			console.error(...params);
		} else {
			console.log(...params);
		}
	};
}
