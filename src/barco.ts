
export default class Barco {
 
    marca: string;
    modelo: string;

    
    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    
    mover() {
       console.log("o Barco está se movendo")
    }
}