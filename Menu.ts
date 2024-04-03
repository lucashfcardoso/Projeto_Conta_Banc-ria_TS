import readlinesync = require("readline-sync"); //importar biblioteca readline-sync
import { colors } from "./src/util/Colors"; //importar biblioteca de cores
import { Conta } from "./src/util/model/Conta";
import { ContaCorrente } from "./src/util/model/ContaCorrente";
import { ContaPoupanca } from "./src/util/model/ContaPoupanca";
import { ContaController } from "./src/util/controller/ContaController";

export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversário, valor, numeroDestino: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupanca'];

    let contas: ContaController = new ContaController();

    let cc1: ContaCorrente = new ContaCorrente(2, 456, 1, "Lucas", 5000, 1000)
    contas.cadastrar(cc1);

    /* Objeto da Classe Conta (Teste)
    const conta: Conta = new Conta(1, 123, 1, "Carlos", 10000);
    conta.visualizar();
    conta.sacar(500);
    conta.visualizar();
    conta.depositar(2000);
    conta.visualizar();*/

    const ccor1: ContaCorrente = new ContaCorrente (contas.gerarNumero(), 456, 1, "Lucas", 5000, 1000);
    ccor1.visualizar();
    ccor1.sacar(1000);
    ccor1.visualizar();
    ccor1.depositar(5000);
    ccor1.visualizar();

    const cpou1: ContaPoupanca = new ContaPoupanca (contas.gerarNumero(), 456, 2, "Lucas", 300, 10); //dia do aniversário (10)
    cpou1.visualizar();
    cpou1.sacar(50);
    cpou1.visualizar();
    cpou1.depositar(100);
    cpou1.visualizar();

    while (true) { //loop repetição enquanto for true
    //primeiro console.log possui cor background preta, e cor da letra cyan, e no final do código, resetar cor padrão
    console.log(colors.bg.black, colors.fg.cyan,"************************************************************************")
    console.log("                                                                        " , colors.reset)
    console.log(colors.fg.cyanstrong, "                            BANCO DO LUCAS                              ", colors.reset)
    console.log(colors.bg.black, colors.fg.cyan, "                                                                        ")
    console.log("************************************************************************")
    console.log("                                                                        ")
    console.log("                        1 - Criar Conta                                 ")
    console.log("                        2 - Listar todas as Contas                      ")
    console.log("                        3 - Buscar Conta por Número                     ")
    console.log("                        4 - Atualizar Dados da Conta                    ")
    console.log("                        5 - Apagar Conta                                ")
    console.log("                        6 - Sacar                                       ")
    console.log("                        7 - Depositar                                   ")
    console.log("                        8 - Transferir valores entre Contas             ")
    console.log("                        9 - Sair                                        ")
    console.log("                                                                        ")
    console.log("************************************************************************")
    console.log("                                                                        " , colors.reset) //delimitar até onde vai a cor
    console.log(colors.bg.black, colors.fg.white, "Entre com a opção desejada: "); //digite o código referente a opção
    opcao = readlinesync.questionInt ("") //guardar número digitado (entrada)
    console.log(colors.reset)

    if (opcao == 9) { //SE o código digitado for 9
        console.log (colors.fg.cyanstrong, "Banco do Lucas - Planejando seu Futuro! ", colors.reset) //aparece esta mensagem de saída
        sobre(); //exeibirá os dados do criador
        process.exit(0); //programa será finalizado
    }

    switch(opcao) {                               //referente ao número digitado, caso (x) aprece mensagem (console)
        case 1:
            console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n" , colors.reset);
           
            console.log("Digite o número da agência: ")
            agencia = readlinesync.questionInt ("") //mensagem feita antes pois readline não aceita acentos
           
            console.log("Digite o nome da títular: ")
            titular = readlinesync.question ("")
           
            console.log("Informe o tipo da conta: ")
            tipo = readlinesync.keyInSelect(tipoContas, "", {cancel:false}) + 1 //+1 para não começar no índice 0

            console.log("Digite o saldo da conta: ")
            saldo = readlinesync.questionFloat ("")

            switch(tipo){
                case 1: //caso seja conta corrente
                console.log("Digite o limite da conta: ")
                limite = readlinesync.questionFloat("")
                contas.cadastrar(
                    new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                )
                break;

                case 2:
                    console.log("Digite o dia do aniverário da conta: ")
                    aniversário = readlinesync.questionInt("")
                    contas.cadastrar(
                        new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversário)
                    )
                    break;
            }
            keyPress()
            break;

        case 2:                                   
            console.log(colors.fg.whitestrong, "\n\nListar todas as Contas\n\n", colors.reset);
            contas.listarTodas();
            keyPress()
            break;
            
        case 3:
            console.log(colors.fg.whitestrong, "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

            console.log("Digite o número da conta: ")
            numero = readlinesync.questionInt ("")

            contas.procurarPorNumero(numero);
            keyPress()
            break;
        
        case 4:
            console.log(colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", colors.reset);

            console.log("Digite o número da conta: ")
            numero = readlinesync.questionInt ("")

            let conta = contas.buscarNoArray(numero)

            if (conta !== null){

            console.log("Digite o número da agência: ")
            agencia = readlinesync.questionInt ("") //mensagem feita antes pois readline não aceita acentos
           
            console.log("Digite o nome da títular: ")
            titular = readlinesync.question ("")
           
            tipo = conta.tipo

            console.log("Digite o saldo da conta: ")
            saldo = readlinesync.questionFloat ("")

            switch(tipo){
                case 1: //caso seja conta corrente
                console.log("Digite o limite da conta: ")
                limite = readlinesync.questionFloat("")
                contas.atualizar(
                    new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                )
                break;

                case 2:
                    console.log("Digite o dia do aniverário da conta: ")
                    aniversário = readlinesync.questionInt("")
                    contas.atualizar(
                        new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversário)
                    )
                    break;
                }
            }else {
                console.log("A conta não foi encontrada!")
            }

            keyPress()
            break;

        case 5:
            console.log(colors.fg.whitestrong, "\n\nApagar uma Conta\n\n", colors.reset);

            console.log("Digite o número da conta: ")
            numero = readlinesync.questionInt ("")

            contas.deletar(numero);

            keyPress()
            break;

        case 6:
            console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);

            console.log("Digite o número da conta: ")
            numero = readlinesync.questionInt ("")

            console.log("Digite o valor do saque: ")
            valor = readlinesync.questionFloat ("")

            contas.sacar(numero, valor);

            keyPress()
            break;

        case 7:
            console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);

            console.log("Digite o número da conta: ")
            numero = readlinesync.questionInt ("")

            console.log("Digite o valor do depósito: ")
            valor = readlinesync.questionFloat ("")

            contas.depositar(numero, valor);

            keyPress()
            break;

        case 8:
            console.log(colors.fg.whitestrong, "\n\nTransferência entre Contas\n\n", colors.reset);

            console.log("Digite o número da conta de origem: ")
            numero = readlinesync.questionInt ("")

            console.log("Digite o número da conta de destino: ")
            numeroDestino = readlinesync.questionInt ("")

            console.log("Digite o valor do depósito: ")
            valor = readlinesync.questionFloat ("")

            contas.transferir(numero, numeroDestino, valor);

            keyPress()
            break;
            default:                                   //caso dígito seja diferente
                console.log("\nOpção Inválida!\n")     //aparece essa mensagem 

            break;
    }   
  }   
}   

    export function sobre(): void {                                    //função com dados da pessoa desenvolvedora
        console.log("\n******************************************")
        console.log("\nProjeto Desenvolvido por: Lucas Henrique")
        console.log("\nlucashfcardoso@gmail.com")
        console.log("\nhttps://github.com/lucashfcardoso")
        console.log("\n******************************************")
    }

    function keyPress() {
        console.log(colors.reset, "");
        console.log("\n Pressione enter para continuar")
        readlinesync.prompt();
    }

main ();              //para função criada no início funcionar