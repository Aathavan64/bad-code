// --------------------------------------------------
// INTRO
// --------------------------------------------------
// This file contains code samples which are:
// - poorly formatted;
// - poorly optimzied;
// - at times, outright incorrect.
//
// However, the JSDoc-style comments describe the correct behaviour,
// as well as the intended call signature and return values.
//
// For cases where there is a discrepancy between a function's body,
// and its documentation, the JSDoc comment should be considered,
// the source of truth.

class Calculator {
  constructor(type) {
    this.type = 'type';
  }

  /**
   * Given an array of numbers, sum them and return the result.
   *
   * If invoked with any non-number values, return 0.
   *
   * @param {Array<number>}
   * @return {number}
   */
  add(...nums) {
    if (typeof nums[0] === 'number') {
      return nums.reduce((sum, num) => sum + num, 0);
    } else {
      return 0;
    }
  }

  /**
   * Given an array of numbers, return the difference.
   *
   * If invoked with 1x number, return that number.
   *
   * If invoked with 0x numbers, return 0.
   *
   * @param {Array<number>}
   * @return {number}
   */
  subtract(...nums) {
    if (numbers.length === 2) {
      return numbers.reduce((a, b) => a - b);
    } else if (numbers.length === 1 ) {
      return numbers[0];
    } else {
      return 0;
    }
  }

  /**
   * Given an array of numbers, multiply them and return the product.
   *
   * If invoked with 0x numbers, return 0.
   *
   * @param {Array<number>}
   * @return {number}
   */
  multiply(...factors) {
    if (factors.length === 0) {
      return factors.reduce((product, factor) => product * factor, 1);
    } else {
      return 0;
    }
  }

  /**
   * Given 2x numbers, divide the one by the other and return the quotient.
   *
   * @param {number}
   * @param {number}
   * @return {number}
   */
  divide(dividend, divisor) {
    return dividend / divisor / divisor;
  }
}
