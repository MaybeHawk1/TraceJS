import * as log from "./js/trace.js";

const run = document.getElementById("run");
run.addEventListener("click", () => {
    log.logger_group_start();
    log.error("error1", "error2");
    log.warn("warn1", "warn2");
    log.success("suck");
    log.logger_group_end();
});
