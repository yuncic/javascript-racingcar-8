import InputView from "./InputView.js";
import OutPutView from "./OutputView.js";
import VALIDATOR from "./Validator.js";
import Car from "./Car.js"
import Race from "./Race.js"
import { MESSAGES } from "./Constants.js";
import { MissionUtils } from "@woowacourse/mission-utils";


class App {
  async run() {
    try {
      const carNames = await InputView.readCarNames();
      VALIDATOR.validatorCarNames(carNames);
      const tryCount = await InputView.readTryCount();
      VALIDATOR.validatortTryCount(tryCount);

      const CARS = carNames.map((name) => new Car(name));
      const RACE = new Race(CARS);

      MissionUtils.Console.print(MESSAGES.RESULT);

      for (let i = 0; i < tryCount; i++) {
        RACE.playRound();
        OutPutView.PRINT_ROUND_RESULT(CARS);
      }

      const WINNERS = RACE.getWinners();
      OutPutView.PRINT_FINAL_WINNERS(WINNERS);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }

  }
}

export default App;
