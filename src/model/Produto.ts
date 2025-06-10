export abstract class Produto {

    private _id: number;
    private _nome: string;
    private _tipo: number;
    private _preco: number;
    private _estoque: number;
    
    constructor(id: number, nome: string, tipo: number, preco: number, estoque: number){
        this._id = id;
        this._nome = nome;
        this._tipo = tipo;
        this._preco = preco;
        this._estoque = estoque;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public get tipo(): number {
        return this._tipo;
    }

    public set tipo(value: number) {
        this._tipo = value;
    }

    public get preco(): number {
        return this._preco;
    }

    public set preco(value: number) {
        this._preco = value;
    }

    public get estoque(): number {
        return this._estoque;
    }

    public set estoque(value: number) {
        this._estoque = value;
    }

    public vender(quantidade: number): boolean {
        if (this._estoque < quantidade) {
            console.log("\nEstoque insuficiente!");
            return false;
        }

        this._estoque = this._estoque - quantidade;
        return true;
    }

    public visualizar(): void {
        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Camiseta";
                break;
            case 2:
                tipo = "Calça";
                break;
        }

        console.log("\n\n*****************************************************");
        console.log("Dados do Produto:");
        console.log("*****************************************************");
        console.log("ID do Produto: " + this._id);
        console.log("Nome: " + this._nome);
        console.log("Tipo: " + tipo);
        console.log("Preço: " + this._preco.toFixed(2));
        console.log("Estoque: " + this._estoque);
    }
}