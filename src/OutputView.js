import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES } from "./Constants.js";

const OutPutView = {
    PRINT_ROUND_RESULT(cars) {
        cars.forEach((car) => {
            MissionUtils.Console.print(`${car.name} : ${car.getPositionMark()}`);
        });
        MissionUtils.Console.print("");
    },

    PRINT_FINAL_WINNERS(winners) {
        MissionUtils.Console.print(`${MESSAGES.WINNER}${winners.join(", ")}`);
    }
};

export default OutPutView;