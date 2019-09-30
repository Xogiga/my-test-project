"use strict";
class testCase {
	constructor(json) {
		this.json = json;
	}

	getJson(){
		return this.json;
	}

	getRequirement(){
		var obj = JSON.parse(this.json);
		if (undefined !== obj.requirement) {
			return obj.requirement;
		}
		return false;
	}

	getExecutions(){
		var arrayConstructor = [].constructor;
		var obj = JSON.parse(this.json);
		if (undefined !== obj.executions && obj.executions.constructor === arrayConstructor) {
			return obj.executions;
		}
		return false;
	}
}

module.exports = testCase;
