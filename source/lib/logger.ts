type LogLevel = number;

interface LoggerOptions {
	logLevel?: LogLevel;
}

// eslint-disable-next-line no-unused-vars
type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any
	? A
	: never;

export class SimpleLogger {
	private logLevel: LogLevel;

	constructor(opts: LoggerOptions) {
		this.logLevel = opts.logLevel || 5;
	}

	debug(...args: ArgumentTypes<typeof console.debug>) {
		if (this.logLevel >= 5) {
			console.debug(...args);
		}
	}

	log(...args: ArgumentTypes<typeof console.log>) {
		if (this.logLevel >= 4) {
			console.log(...args);
		}
	}

	inspect(...args: ArgumentTypes<typeof console.log>) {
		if (this.logLevel >= 4) {
			console.log(...args);
		}
	}

	info(...args: ArgumentTypes<typeof console.info>) {
		if (this.logLevel >= 3) {
			console.info(...args);
		}
	}

	warn(...args: ArgumentTypes<typeof console.warn>) {
		if (this.logLevel >= 2) {
			console.warn(...args);
		}
	}

	error(...args: ArgumentTypes<typeof console.error>) {
		if (this.logLevel >= 1) {
			console.error(...args);
		}
	}
}
