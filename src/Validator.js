import { ERROR_MESSAGES } from "./Constants.js";

const VALIDATOR = {
    validatorCarNames(names) {
        if (names.some((name) => name.length === 0 || name.length > 5)) {
            throw new Error(ERROR_MESSAGES.INVALID_NAME)
        }
    },
    validatorTryCount(count) {
        if (isNaN(count) || Number(count) <= 0) {
            throw new Error(ERROR_MESSAGES.INVALID_TRY_COUNT)
        }
    }
};

export default VALIDATOR;