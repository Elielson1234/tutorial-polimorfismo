import Veiculo from './veiculo';
export default class  Aviao extends Veiculo {
 
   
    constructor(marca: string, modelo: string) {
        super(marca, modelo);
    }
    

    
    mover(): void {
       console.log("o avião está se movendo")
    }
}