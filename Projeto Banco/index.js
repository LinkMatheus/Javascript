import { ContaCorrente } from "./ContaCorrente.js";
import { Cliente } from "./Cliente.js";

const cliente1 = new Cliente("Ricardo",11122233309);

const cliente2 = new Cliente( "Alice",88822233309);
let numeroDeContas = 0;



const contaCorrenteRicardo = new ContaCorrente(cliente1,101);


const conta2 = new ContaCorrente(cliente2,102);

contaCorrenteRicardo.transferir(200,conta2);

console.log(ContaCorrente.numeroDeContas);
