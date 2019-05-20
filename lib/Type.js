'use-strict'

class Type {
	constructor() {}

	static infer(v) {
		if(v === undefined) return 'undefined';
		if(v === null) return 'null';
		let type = typeof v;
		if(type === 'object' || type === 'function') {
			type = v.constructor.name;
			if(type === 'Object' || type === 'Function') {
				return type.toLowerCase();
			}
		}
		return type;
	}
	
	static strictMatch(s, t) {
		return this.infer(s) === this.infer(t) ? true : false;
	}
	
	static match(s, t) {
		let typeOfS = this.infer(s);
		let typeOfT = this.infer(t);

		typeOfS = !this.primitives.has(typeOfS) ? typeOfS.toLowerCase() : typeOfS;
		typeOfT = !this.primitives.has(typeOfT) ? typeOfT.toLowerCase() : typeOfT;
		return typeOfS === typeOfT ? true : false;
	}
}

Type.primitives = new Set([
	'undefined',
	'null',
	'object',
	'symbol',
	'string',
	'number',
	'boolean'
]);

module.exports = Type;
