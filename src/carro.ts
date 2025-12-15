
export default class Carro {
 
    marca: string;
    modelo: string;

    
    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    
    mover() {
       console.log("o carro está se movendo")
    }
}