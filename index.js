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
 *	
 *	@param nit {number}
 *	@param series {array}
 *
 */
var helper = require('./lib/helpers')

module.exports = (nit, series) => {
	this.nit = nit.toString().split("")
	this.series = (series || [71,67,59,53,47,43,41,37,29,23,19,17,13,7,3])

	var count = 0;
	/** 
	 *	Get Diference between series and nit and 
	 *	Equality Nit Array 
	 */
	var diff = helper.validate(this.series.length - this.nit.length)
	var context = helper.match(diff, this.nit)

	/** Multiply each number in strict order */
	this.series.forEach((num, indx) => {
		count += num * parseInt(context[indx])
	}) 	

	var modulo = (count % 11)
	var digit = (modulo === 0 || modulo === 1) ? modulo: 11 - modulo

	return digit
}



