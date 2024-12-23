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


/*
 * start the grouping for the loggger
 */
export function logger_group_start() {
    console.group("Logs");
}

/*
 * End the grouping for the logger
 */
export function logger_group_end() {
    console.groupEnd();
}

/*
 * prints out an error passed to it
 * @param {string} err_msgs - Either one or multipke error messages
 * @returns {number} - error code
 */
export function error(...err_msgs) {
    console.group("Errors");
    err_msgs.forEach((err_msg) => {
        console.error("[ERROR] " + err_msg);
        return 1;
    })
    console.groupEnd();
}

/*
 * prints out an warning passed to it
 * @param {string} warn_msgs - Either one or multipke error messages
 * @returns {null} - nothing
 */
export function warn(...warn_msgs) {
    console.group("Warnings");
    warn_msgs.forEach((warn_msg) => {
        console.warn("[WARNING] " + warn_msg);
    })
    console.groupEnd();
}

/*
 *  prints out a message indicating something was done with success
 *  @param {string} msgs - the message that is gonna be printed
 *  @returns {null}
 */
export function success(...msgs) {
    console.group("Succeses");
    msgs.forEach((msg) => {
        console.log("[SUCESS] " + msg);
    })
    console.groupEnd()
}

/*
 * logs a fatal warning
 * @param {string} warn_msgs - The warning messages.
 * @param {number} err_code - The error code.
 * @returns {number} - returns err_code if it is not null.
 */
export function fatal_warn(err_code, ...warn_msgs) {
    console.group("Fatal Warnings");
    warn_msgs.forEach((msg) => {
        console.log("[FATAL] " + msg);
    });

    if (err_code != null) {
        return err_code;
    }
}
// End of region
