import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository{ //Implementar Métodos da Interface (Quick Fix)

    private listaContas: Array<Conta> = new Array<Conta>();

    numero: number = 0;

    procurarPorNumero(numero: number): void {
        throw new Error("Method not implemented.");
    }
    listarTodas(): void {                       
        for (let conta of this.listaContas){   //percorre array e guarda objetos (for of é for simplificado)
            conta.visualizar();
        }
    }
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("A Conta foi adicionada")
    }
    atualizar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }
    deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }
    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    
}