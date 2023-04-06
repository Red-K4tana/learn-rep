

class Auto {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    };

    run (speed) {
        this.speed = speed;
        alert(`${this.name} move with speed ${this.speed}`);
    };

    stop () {
        this.speed = 0;
        alert(`Speed of ${this.name} - ${this.speed}`)
    };
};