/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MAIN //

/**
* Returns the expected value of a beta prime distribution.
*
* @param {PositiveNumber} alpha - first shape parameter
* @param {PositiveNumber} beta - second shape parameter
* @returns {PositiveNumber} expected value
*
* @example
* var v = mean( 1.0, 2.0 );
* // returns 1.0
*
* @example
* var v = mean( 4.0, 12.0 );
* // returns ~0.364
*
* @example
* var v = mean( 8.0, 2.0 );
* // returns 8.0
*
* @example
* var v = mean( 1.0, 1.0 );
* // returns NaN
*
* @example
* var v = mean( 1.0, -0.1 );
* // returns NaN
*
* @example
* var v = mean( -0.1, 1.0 );
* // returns NaN
*
* @example
* var v = mean( 2.0, NaN );
* // returns NaN
*
* @example
* var v = mean( NaN, 2.0 );
* // returns NaN
*/
function mean( alpha, beta ) {
	if ( alpha <= 0.0 || beta <= 1.0 ) {
		return NaN;
	}
	return alpha / ( beta - 1.0 );
}


// EXPORTS //

module.exports = mean;