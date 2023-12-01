// Escrevendo as Classes de Um Jogo

class Heroe {

    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        let typeOfAttack;

        switch(this.type) {
            case "mago":
                typeOfAttack = "magia";
                console.log(`O ${this.type} atacou usando ${typeOfAttack}!`);
                break;
            
            case "guerreiro":
                typeOfAttack = "espada";
                console.log(`O ${this.type} atacou usando ${typeOfAttack}!`);
                break;
            
            case "monge":
                typeOfAttack = "artes marciais";
                console.log(`O ${this.type} atacou usando ${typeOfAttack}!`);
                break;

            case "ninja":
                typeOfAttack = "shuriken";
                console.log(`O ${this.type} atacou usando ${typeOfAttack}!`);
                break;
            
            default:
                console.log("Heroe not found! Try again :)");

        }
    }
    
}

let yourHeroe = new Heroe("HeroeExample", 72, "ninja").attack();