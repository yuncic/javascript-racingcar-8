import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES } from "./Constants.js";

const OutputView = {
    PrintRoundResult(cars) {
        cars.forEach((car) => {
            MissionUtils.Console.print(`${car.name} : ${car.getPositionMark()}`);
        });
        MissionUtils.Console.print("");
    },

    PrintFinalWinners(winners) {
        MissionUtils.Console.print(`${MESSAGES.WINNER}${winners.join(", ")}`);
    }
};

export default OutputView;