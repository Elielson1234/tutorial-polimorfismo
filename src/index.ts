
import  Carro  from './carro';
import  Barco  from './barco';
import  Aviao  from './aviao';

const carro1 = new Carro("Porsche", "911");
const barco1 = new Barco("Azimut", "56");
const aviao1 = new Aviao("Cessna", "172");

console.log(carro1.mover())
console.log(barco1.mover())
console.log(aviao1.mover())