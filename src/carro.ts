import Veiculo from './veiculo';
export default class Carro  extends Veiculo {
  
  
    constructor(marca: string, modelo: string) {
        super(marca, modelo);
    }
    
    mover(): void {
       console.log("o carro está se movendo")
    }
}