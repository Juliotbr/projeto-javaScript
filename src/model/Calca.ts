import { Produto } from "./Produto";

export class Calca extends Produto {

    private _material: string;

    constructor(id: number, nome: string, tipo: number, preco: number, estoque: number, material: string) {
        super(id, nome, tipo, preco, estoque);
        this._material = material;
    }
    public get material() {
        return this._material;
    }

    public set material(material: string) {
        this._material = material;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Material: " + this._material);
    }
}