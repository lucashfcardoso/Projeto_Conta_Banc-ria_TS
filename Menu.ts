import readlinesync = require("readline-sync"); //importar biblioteca readline-sync
import { colors } from "./src/util/Colors"; //importar biblioteca de cores

export function main () { //cria função main, e export para ficar acessível fora da classe menu
    
    let opcao: number; //variável tipo number chamada opcao
    
    while (true) { //loop repetição enquanto for true
//primeiro console.log possui cor background preta, e cor da letra cyan, e no final do código ,resetar cor padrão
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
    console.log(colors.reset
        )

    if (opcao == 9) { //SE o código digitado for 9
        console.log (colors.fg.cyanstrong, "Banco do Lucas - Planejando seu Futuro! ", colors.reset) //aparece esta mensagem de saída
        sobre(); //exeibirá os dados da pessoa
        process.exit(0); //programa será finalizado
    }

    switch(opcao) {                               //referente ao número digitado, caso (x) aprece mensagem (console)
        case 1:
            console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n" , colors.reset);
        
            break;
        case 2:
            console.log(colors.fg.whitestrong, "\n\nListar todas as Contas\n\n", colors.reset);
    
            break;
        case 3:
            console.log(colors.fg.whitestrong, "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

            break;
        case 4:
            console.log(colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", colors.reset);

            break;
        case 5:
            console.log(colors.fg.whitestrong, "\n\nApagar um Conta\n\n", colors.reset);

            break;
        case 6:
            console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);

            break;
        case 7:
            console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);

            break;
        case 8:
            console.log(colors.fg.whitestrong, "\n\nTransferência entre Contas\n\n", colors.reset);

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
main ();              //para função criada no início funcionar