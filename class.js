class Teams {
    constructor(name, id, age, position) {
        this.name = name;
        this.id = id;
        this.age = age;
        this.position = position;
    }

    add() {
        return `${this.name} is a dangerous striker`
    }

    static EnrollingPlayers() {
        return 'Enrolled - messi🔥⚽'
    }
}

let player1 = new Teams("marco", "aadhar", 25, "striker");
console.log(player1.add())
console.log(Teams.EnrollingPlayers())

