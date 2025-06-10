import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/colors";

export class ProdutoController implements ProdutoRepository {
    
    private listaProdutos: Array<Produto> = new Array<Produto>();
    id: number = 0;

    procurarPorId(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto != null) {
            buscaProduto.visualizar();
        } else {
            console.log(colors.fg.red, `\nO produto com ID ${id} não foi encontrado!`, colors.reset);
        }
    }

    listarTodos(): void {
        for (let produto of this.listaProdutos) {
            produto.visualizar();
        }
    }

    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log(colors.fg.green, `\nO Produto ID ${produto.id}: ${produto.nome} foi cadastrado com sucesso!`, colors.reset);
    }

    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);

        if (buscaProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log(colors.fg.green, `\nO Produto ID ${produto.id} foi atualizado com sucesso!`, colors.reset);
        } else {
            console.log(colors.fg.red, `\nO produto com ID ${produto.id} não foi encontrado!`, colors.reset);
        }
    }

    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log(colors.fg.green, `\nO produto com ID ${id} foi deletado com sucesso!`, colors.reset);
        } else {
            console.log(colors.fg.red, `\nO produto com ID ${id} não foi encontrado!`, colors.reset);
        }
    }

    vender(id: number, quantidade: number): void {
        let produto = this.buscarNoArray(id);
        
        if (produto != null) {
            if (produto.vender(quantidade) == true)
                console.log(colors.fg.green, `\nVenda de ${quantidade} unidade(s) do produto ID ${id} realizada com sucesso!`, colors.reset);
        } else {
            console.log(colors.fg.red, `\nO produto com ID ${id} não foi encontrado!`, colors.reset);
        }
    }

    adicionarEstoque(id: number, quantidade: number): void {
        let produto = this.buscarNoArray(id);

        if (produto != null) {
            produto.estoque = produto.estoque + quantidade;
            console.log(colors.fg.green, `\nEstoque do produto ID ${id} atualizado com sucesso!`, colors.reset);
        } else {
            console.log(colors.fg.red, `\nO produto com ID ${id} não foi encontrado!`, colors.reset);
        }
    }

    public gerarId(): number {
        return ++this.id;
    }

    public buscarNoArray(id: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if (produto.id === id) {
                return produto;
            }
        }
        return null;
    }
}