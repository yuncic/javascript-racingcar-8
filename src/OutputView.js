import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES, RANDOM } from "./Constants.js";

const OutPutView = {
    ROUND_RESULT(cars) {
        cars.forEach((car) => {
            MissionUtils.Console.print(`${car.name} : ${car.getPositionMark()}`);
        });
        MissionUtils.Console.print("");
    },

    FINAL_WINNERS(winners) {
        MissionUtils.Console.print(`${MESSAGES.WINNER}${winners.join(", ")}`);
    }
};

export default OutPutView;