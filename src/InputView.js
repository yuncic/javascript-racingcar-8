import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES, RANDOM } from "./Constants.js";

const InputView = {
    async readCarNames() {
        const input = await MissionUtils.Console.readLineAsync(MESSAGES.INPUT_CAR_NAMES + "\n");
        return input.split(",").map((name) => name.trim());
    },

    async readTryCount() {
        const input = await MissionUtils.Console.readLineAsync(MESSAGES.INPUT_TRY_COUNT + "\n");
        return Number(input);
    }
};

export default InputView;