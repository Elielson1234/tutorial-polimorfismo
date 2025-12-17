import Veiculo from './veiculo';
export default class Barco extends Veiculo {
 
    constructor(marca: string, modelo: string) {
        super(marca, modelo);
    }
    

    
    mover(): void {
       console.log("o Barco está se movendo")
    }
}