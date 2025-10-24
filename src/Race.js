import { MissionUtils } from "@woowacourse/mission-utils";
import { RACE_CONFIG } from "./Constants.js";

class Race {
    constructor(cars) {
        this.cars = cars;
    }
    playRound() {
        this.cars.forEach((car) => {
            const RANDOM = MissionUtils.Random.pickNumberInRange(RACE_CONFIG.MIN, RACE_CONFIG.MAX);
            if (RANDOM >= RACE_CONFIG.MOVE_CONDITION) {
                car.move();
            }
        });
    }
    getWinners() {
        const MAX_POSITION = Math.max(...this.cars.map(car => car.position));
        return this.cars
            .filter(car => car.position === MAX_POSITION)
            .map(car => car.name);
    }
}

export default Race;
