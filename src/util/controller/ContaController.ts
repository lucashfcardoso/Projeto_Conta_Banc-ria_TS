import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository{ //Implementar Métodos da Interface (Quick Fix)

    private listaContas: Array<Conta> = new Array<Conta>();

    numero: number = 0;

    procurarPorNumero(numero: number): void {
        let buscarConta = this.buscarNoArray(numero);
        if(buscarConta !== null)
            buscarConta.visualizar()
        else 
            console.log("\nConta não foi encontrada!")
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
        let buscarConta = this.buscarNoArray(conta.numero);

        if(buscarConta !== null){
            this.listaContas[this.listaContas.indexOf(buscarConta)] = conta
            console.log(`A conta número ${conta.numero} foi atualizada com sucesso!`)
         } else 
            console.log("\nConta não foi encontrada!")
    }

    deletar(numero: number): void {
        let buscarConta = this.buscarNoArray(numero);
        if(buscarConta !== null){
            this.listaContas.splice(this.listaContas.indexOf(buscarConta),1)
            console.log(`A conta número ${numero} foi excluida com sucesso!`)
         } else 
            console.log("\nConta não foi encontrada!")
    }

    sacar(numero: number, valor: number): void {
        let buscarConta = this.buscarNoArray(numero);
        if(buscarConta !== null){
            if(buscarConta.sacar(valor) === true)
            console.log(`O saque na conta número ${numero} foi efetuado com sucesso!`)
         } else 
            console.log("\nConta não foi encontrada!")
    }

    depositar(numero: number, valor: number): void {
        let buscarConta = this.buscarNoArray(numero);
        if(buscarConta !== null){
            buscarConta.depositar(valor)
            console.log(`O depósito na conta número ${numero} foi efetuado com sucesso!`)
         } else 
            console.log("\nConta não foi encontrada!")
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

        if(contaOrigem !== null && contaDestino !== null){
            if(contaOrigem.sacar(valor) === true) {
                contaDestino.depositar(valor)
                console.log(`A transferência da conta ${numeroOrigem} para a conta ${numeroDestino} foi efetuada com sucesso!`)
            }
         } else 
            console.log("\nConta de origem e/ou a conta de destino não foram encontradas!")
    }
 
    //Métodos Auxiliares

    public gerarNumero(): number {
        return ++ this.numero
    }

    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas){
            if (conta.numero === numero)    //se número da conta for igual número do parâmetro, retorna a conta
            return conta;
        }
        return null;                        //caso contrário, retorne null (não achou o número do parâmetro)
    }
}