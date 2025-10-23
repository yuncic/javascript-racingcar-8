class Car {
    constructor(name) {
        this.name = name;
        this.position = 0;
    }

    move() {
        this.position += 1;
    }

    getPositionMark() {
        return "-".repeat(this.position);
    }
}

export default Car;