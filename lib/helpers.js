/**
 *	Add Zero
 *	
 *	@param times {number}
 *	@param nit {array}
 */
exports.addZero = (times, nit) => {
	if(times !== 0) {
		for(var i = 0; i < times; i++) {
			nit.unshift(0)
		}
	}
	return nit
}

/**
 *	Validate
 *	
 *	@param diff {number}
 */
exports.validate = (diff) => {
	if(diff >= 0) {
		return diff;
	} else {
		throw TypeError("El nit ingresado no es valido")
	}
}