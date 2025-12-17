
export default class Veiculo {
 
    marca: string;
    modelo: string;

    
    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }
    mover(): void {
       console.log("o Veículo está se movendo")
    }
  
}