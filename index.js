class carro{
    marca
    cor
    medCombustivel //km por litros Ex. 12km/l
    constructor(marca, cor, medCombustivel){
        this.marca=marca
        this.cor=cor
        this.medCombustivel=medCombustivel
    }
    
    autonomia(trajeto, precoCombustivel){
        return ((trajeto/this.medCombustivel) * precoCombustivel)
        }
}

let sandero = new carro ("Renault", "branco", 10)
console.log (sandero)
console.log(sandero.autonomia(10, 6).toFixed(2))
 
let uninho = new carro ("Fiat", "azul", 14)
console.log (uninho)
console.log(uninho.autonomia(120, 6.40).toFixed(2))
 

