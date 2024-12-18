// Region: Utils
function IsStrEmpty(str) {
  return !str || str.trim().length === 0;
}
// End Of Region

// Region: Assertion

// TODO: Let the user choose the error code

/* *
 * assert equal 
 * @param {boolean} expression - The expression to check for example (1 === 1) this will be true
 * @param {string or boolean} actual - The actual value to check for example (2 > 3) this will be false 
 * @param {string} err_msg - The error message to log
 * @returns {number} an error code one by default
*/
export function assert_eq(expression, actual, err_msg) {
  if (expression != actual) {
    if (IsStrEmpty(err_msg)) {
      console.log(`[ASSERT] Assertion Failed: ${err_msg}`);
      return 1;
    } else {
      console.log(`[ASSERT] Assertion Failed`);
      return 1;
    }
  }

}

/* *
 * assert not equal 
 * @param {boolean} expression - The expression to check for example (1 === 1) this will be true
 * @param {string or boolean} actual - The actual value to check for example (2 > 3) this will be false 
 * @param {string} err_msg - The error message to log
 * @returns {number} an error code one by default
*/
export function assert_nq(actual, unexpected, err_msg) {
  if (unexpected == actual) {
    if (IsStrEmpty(err_msg)) {
      console.log(`[ASSERT] Assertion Failed: ${err_msg}`);
      return 1;
    } else {
      console.log(`[ASSERT] Assertion Failed`);
      return 1;
    }
  }
}

/* *
* assert
* @param {boolean} expression - The expression for example (1 !== 2) this will be true
* @param {string} err_msg - The error message to log
* @returns {number} - the error code 
*/
export function assert(expression, err_msg) {
  if (!expression) {
    if (IsStrEmpty(err_msg)) {
      console.log(`[ASSERT] Assertion Failed: ${err_msg}`);
    } else {
      console.log(`[ASSERT] Assertion Failed`);
    }
  }
}
// End Of Region
