import { MissionUtils } from "@woowacourse/mission-utils";
import { RANDOM } from "./Constants.js";

class Race {
    constructor(cars) {
        this.cars = cars;
    }
    playRound() {
    this.cars.forEach ((car) => {
        const random = MissionUtils.Random.picNumberInRange(RANDOM.MIN,RANDOM.MAX);
        if (random >= RANDOM.MOVE_CONDITION) {
            car.move();
        }
    });
}
    getWinners() {
        const MAX_POISTION = Math.max(...this.cars.map((car) => car.postion));
        return this.cars
            .filter((car) => car.position === MAX_POISTION)
            .map((car) => car.name);
  }
}

export default Race;
