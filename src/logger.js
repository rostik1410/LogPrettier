import { defaultConfig } from './config.js';

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

	init(userConfig) {
		this.config = { ...this.config, ...userConfig };
	}

	_messageFormatter = (color, panelTitle, args) => {
		const panel = panelStyles(color);
		const title = titleStyles(color);
		return ['%c%s%c%s%c', panel, panelTitle, title, args[0], ...args];
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
		if (this.config.warnTracebackOn) {
			console.warn(...params);
		} else {
			console.log(...params);
		}
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
