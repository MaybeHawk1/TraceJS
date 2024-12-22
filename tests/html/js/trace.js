// Region: Utils
function IsStrEmpty(str) {
    return !str || str.trim().length === 0;
}
// End Of Region

// Region: Assertion

// TODO: Let the user choose the error code - Done

/* *
 * assert equal 
 * @param {boolean} expression - The expression to check for example (1 === 1) this will be true
 * @param {string or boolean} actual - The actual value to check for example (2 > 3) this will be false 
 * @param {string} err_msg - The error message to log
 * @param {number} err_code - The error code to return
 * @returns {number} returns the supplied err_code if it is not null
*/
export function assert_eq(expression, actual, err_msg, err_code) {
    if (err_code == null) {
        console.error("Please supply an error_code");
    }

    if (expression != actual) {
        if (IsStrEmpty(err_msg)) {
            console.log(`[ASSERT] Assertion Failed: ${err_msg}`);
            return err_code;
        } else {
            console.log(`[ASSERT] Assertion Failed`);
            return err_code;
        }
    }

}

/* *
 * assert not equal 
 * @param {boolean} expression - The expression to check for example (1 === 1) this will be true
 * @param {string or boolean} actual - The actual value to check for example (2 > 3) this will be false 
 * @param {string} err_msg - The error message to log
 * @param {number} err_code - The error code to return
 * @returns {number} returns the supplied err_code if it is not null
*/
export function assert_nq(actual, unexpected, err_msg, err_code) {
    if (err_code == null) {
        console.error("Please supply an error_code");
    }

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
* @param {number} err_code - The error code to return
* @returns {number} returns the supplied err_code if it is not null
*/
export function assert(expression, err_msg, err_code) {
    if (err_code == null) {
        console.error("Please supply an error_code");
    }

    if (!expression) {
        if (IsStrEmpty(err_msg)) {
            console.log(`[ASSERT] Assertion Failed: ${err_msg}`);
            return 1;
        } else {
            console.log(`[ASSERT] Assertion Failed`);
            return 1;
        }
    }
}
// End Of Region

// Region: Logging

export function logger_group_start() {
    console.group("Logs");
}

export function logger_group_end() {
    console.groupEnd();
}

export function error(...err_msgs) {
    console.group("Errors");
    err_msgs.forEach((err_msg) => {
        console.error("[ERROR] " + err_msg);
    })
    console.groupEnd();
}

export function warn(...warn_msgs) {
    console.group("Warnings");
    warn_msgs.forEach((warn_msg) => {
        console.warn("[WARNING] " + warn_msg);
    })
    console.groupEnd();
}

export function success(...msgs) {
    console.group("Success");
    msgs.forEach((msg) => {
        console.log("[SUCCESS] " + msg);
    })
    console.groupEnd()
}
// End of region
