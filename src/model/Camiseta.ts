import { Produto } from "./Produto";

export class Camiseta extends Produto {

    private _estampa: string;

    constructor(id: number, nome: string, tipo: number, preco: number, estoque: number, estampa: string) {
        super(id, nome, tipo, preco, estoque);
        this._estampa = estampa;
    }

    public get estampa() {
        return this._estampa;
    }

    public set estampa(estampa: string) {
        this._estampa = estampa;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Estampa: " + this._estampa);
    }
}