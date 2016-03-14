'use strict'
/**
 *	Copyright 2016 Hansel Morales
 *
 *	Licensed under the Apache License, Version 2.0 (the "License");
 *	you may not use this file except in compliance with the License.
 *	You may obtain a copy of the License at
 *
 *	    http://www.apache.org/licenses/LICENSE-2.0
 *
 *	Unless required by applicable law or agreed to in writing, software
 *	distributed under the License is distributed on an "AS IS" BASIS,
 *	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *	See the License for the specific language governing permissions and
 *	limitations under the License.
 */

/**
 *	Modulo 11 Calulator
 *	
 *	@autor Hansel Morales 2015
 *	@file Main
 */
class Modulo {
	constructor(nit, series) {
		this.calc = this.calculate
	}

	/** 
	 *	Calculate 
	 *	
	 *	@param nit {number}
 	 *	@param series {array}
	 */
	calculate(nit, series) {
		this.nit = nit.toString().split("")
		this.series = (series || [71,67,59,53,47,43,41,37,29,23,19,17,13,7,3])

		/** 
		 *	Get Diference between series and nit and 
		 *	Equality Nit Array 
		 */
		var diff = this.validate(this.series.length - this.nit.length)
		var context = this.addZero(diff, this.nit)

		/** Multiply each number in strict order */
		var count = 0;
		this.series.forEach((num, indx) => {
			count += num * parseInt(context[indx])
		}) 	

		var modulo = (count % 11)
		var digit = (modulo === 0 || modulo === 1) ? modulo: 11 - modulo

		return digit
	}

	/** Validate */
	validate(diff) {
		if(diff >= 0) {
			return diff;
		} else {
			throw TypeError("El nit ingresado no es valido")
		}
	}

	/** Add Zero */
	addZero(times, nit) {
		if(times !== 0) {
			for(var i = 0; i < times; i++) {
				nit.unshift(0)
			}
		}
		return nit
	}
}

module.exports = exports = new Modulo()



