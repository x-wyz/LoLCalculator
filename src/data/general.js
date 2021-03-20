export function duplicate(item){
	// deep copy of an array or object
	if (typeof item === "string" || typeof item === "number" || typeof item  === "boolean" || typeof item === "undefined"){
		return item;
	}
	else if (Array.isArray(item)){
		const newArr = [];
		item.forEach(x => newArr.push(duplicate(x)))
		return newArr;
	}
	else if (typeof item === "object"){
		const newObj = {};
		for (let prop in item){
			newObj[prop] = duplicate(item[prop])
		}
		return newObj;
	}
	else {
		return undefined;
	}
}

export function checkNaN(x){
	return Number.isNaN(parseFloat(x));
}