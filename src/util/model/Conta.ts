export class Conta {

    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    //Método Construtor receberá dados do Objeto através dos parâmetros, que serão atribuídos aos Atributos do Objeto da Classe Conta.    
	constructor(_numero: number, _agencia: number, _tipo: number, _titular: string, _saldo: number) {
		this._numero = _numero;
		this._agencia = _agencia;
		this._tipo = _tipo;
		this._titular = _titular;
		this._saldo = _saldo;
	}   //Os dados recebidos nos parâmetros do Método Construtor são atribuídos aos respectivos Atributos da Classe Conta. Como os parâmetros possuem os mesmos nomes do Atributos da Classe, foi utilizada a palavra reservada this para diferenciar o Atributo da Classe Conta do parâmetro do Método Construtor da Classe Conta
    
    //Métodos Get e Set para todos os Atributos da Classe Conta. Através destes Métodos, poderemos acessar e modificar os Atributos da Classe Conta, a partir de outras Classes. Desta forma, manteremos os nosso Atributos protegidos através do Encapsulamento.

    /**
     * Getter numero
     * @return {number}
     */
	public get numero(): number {
		return this._numero;
	}

    /**
     * Getter agencia
     * @return {number}
     */
	public get agencia(): number {
		return this._agencia;
	}

    /**
     * Getter tipo
     * @return {number}
     */
	public get tipo(): number {
		return this._tipo;
	}

    /**
     * Getter titular
     * @return {string}
     */
	public get titular(): string {
		return this._titular;
	}

    /**
     * Getter saldo
     * @return {number}
     */
	public get saldo(): number {
		return this._saldo;
	}

    /**
     * Setter numero
     * @param {number} value
     */
	public set numero(value: number) {
		this._numero = value;
	}

    /**
     * Setter agencia
     * @param {number} value
     */
	public set agencia(value: number) {
		this._agencia = value;
	}

    /**
     * Setter tipo
     * @param {number} value
     */
	public set tipo(value: number) {
		this._tipo = value;
	}

    /**
     * Setter titular
     * @param {string} value
     */
	public set titular(value: string) {
		this._titular = value;
	}

    /**
     * Setter saldo
     * @param {number} value
     */
	public set saldo(value: number) {
		this._saldo = value;
	}
    

    public sacar(valor: number): boolean {

        if (this._saldo < valor) {
            console.log("\n Saldo Insuficiente!");
            return false;
        }

        this._saldo = this._saldo - valor;
        return true;
    }

    public depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }

    public visualizar(): void {

        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Conta Corrente";
                break;
            case 2:
                tipo = "Conta Poupança";
                break;
        }

        console.log("\n\n*****************************************************");
        console.log("Dados da Conta:");
        console.log("Numero da Conta: " + this._numero);
        console.log("Agência: " + this._agencia);
        console.log("Tipo da Conta: " + tipo);
        console.log("Titular: " + this._titular);
        console.log("Saldo: " + this._saldo.toFixed(2));

    }

}