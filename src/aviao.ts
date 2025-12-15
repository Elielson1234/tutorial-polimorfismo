
export default class  Aviao{
 
    marca: string;
    modelo: string;

    
    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    
    mover() {
       console.log("o avião está se movendo")
    }
}