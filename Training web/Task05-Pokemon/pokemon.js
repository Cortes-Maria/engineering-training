
function Pokemon(name, tipo, attack, defense) {
    this.name = name;
    this.tipo = tipo;
    this. attack = attack;
    this.defense = defense;
}
   
function tipo(name, grass, water, electric,fire){
    this.name = name;
    this.grass = grass;
    this. water = water;
    this.electric = electric;
    this.fire = fire;
}
var fire = new tipo('fire', 2, 0.5, 1, 0.5);
var grass = new tipo('grass', 0.5, 2, 1, 0.5);
var water = new tipo('water', 0.5, 0.5, 0.5, 2);
var electric = new tipo('electric', 1, 2, 0.5, 1);

var Pokemon1 = new Pokemon('pokemon1',fire,40,25);
var Pokemon2 = new Pokemon('pokemon2',electric,54,25);

function damage(attacker, attacked) {
    var attack = attacker.attack;
    var defense = attacked.defense;
    var effectiveness = attacker.tipo[attacked.tipo.name];
    return  (50 * (attack/defense) * effectiveness);
} 
   
console.log(damage(Pokemon1,Pokemon2)); 
