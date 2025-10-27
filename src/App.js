import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
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
      VALIDATOR.validatorTryCount(tryCount);

      const cars = carNames.map((name) => new Car(name));
      const race = new Race(cars);

      MissionUtils.Console.print(MESSAGES.RESULT);

      for (let i = 0; i < tryCount; i++) {
        race.playRound();
        OutputView.PrintRoundResult(cars);
      }

      const winners = race.getWinners();
      OutputView.PrintFinalWinners(winners);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }

  }
}

export default App;
